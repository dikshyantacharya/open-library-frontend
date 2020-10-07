import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableBooksService } from 'src/app/common/available-books/available-books.service';
import { Books } from 'src/app/common/books';

@Component({
  selector: 'app-my-shared-book-details',
  templateUrl: './my-shared-book-details.component.html',
  styleUrls: ['./my-shared-book-details.component.css']
})
export class MySharedBookDetailsComponent implements OnInit {
  id: number; 
  addedToAvailabeBook:boolean;
  delete:boolean;
  mySharedBook : Books;
 isOnUpdate:boolean;
 userId :number;
   constructor(private route :ActivatedRoute, private router: Router, private availableBooksService :AvailableBooksService) {
   }
    
 
   ngOnInit(): void {
     this.mySharedBook= new Books();
     this.id= this.route.snapshot.params['id'];
     this.userId=this.route.snapshot.params['userId'];
     
 
      this.availableBooksService.getAvailableBookById(this.userId,this.id).subscribe(data =>{
      console.log(data);
      this.mySharedBook= data;
    },error=> console.log(error)
    ) 
    
  }
 
   myBooks(){
   this.router.navigate(['myBooks',this.userId]);
   }
  
   onDelete(){
 
 this.availableBooksService.deleteAvailableBooks(this.id).subscribe(data=>{
 console.log(data);
 }, error => console.log(error))
 
 
 this.delete= true;
 
   }
 
   }
 
 
 