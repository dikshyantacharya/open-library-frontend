import { Component, OnInit } from '@angular/core';
import {Books} from '../common/books';
import { MyBooksService} from '../common/my-books/my-books.service';
import { ActivatedRoute , Router} from '@angular/router';
import { AvailableBooksService } from '../common/available-books/available-books.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

 id: number; 
 addedToAvailabeBook:boolean;
 delete:boolean;
 myBooks : Books;
isOnUpdate:boolean;
userId :number;
  constructor(private myBooksService :MyBooksService, private route :ActivatedRoute, private router: Router, private availableBooksService :AvailableBooksService) {
  }
   

  ngOnInit(): void {
    this.myBooks= new Books();
    this.id= this.route.snapshot.params['id'];
    this.userId=this.route.snapshot.params['userId'];
    

     this.myBooksService.getMyBookById(this.userId,this.id).subscribe(data =>{
     console.log(data);
     this.myBooks= data;
   },error=> console.log(error)
   ) 
   
 }

  myBooksList(){
this.router.navigate(['myBooks',this.userId]);
  }
  onAddToAvailableBooks(){
    this.availableBooksService.createAvailableBook(this.myBooks).subscribe(data =>{
      console.log(data);

    })
    this.addedToAvailabeBook= true;
  }
  onDelete(){

this.myBooksService.deleteMyBooksById(this.id).subscribe(data=>{
console.log(data);
}, error => console.log(error))


this.delete= true;

  }
onUpdate(){
  this.router.navigate(['/updateMyBooks', this.userId, this.id]);
}
  }


