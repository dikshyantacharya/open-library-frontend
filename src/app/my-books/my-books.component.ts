import { Component, OnInit } from '@angular/core';
import { Books } from '.././common/books';
import { MyBooksService } from '../common/my-books/my-books.service';
import { Observable } from "rxjs";

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  myBooks : Observable<Books[]>;
  id : number;
  userId :number;
  
  addToMyBooks:boolean;

  constructor(private router :Router,private myBooksService :MyBooksService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userId =+this.route.snapshot.params['userId'];
    
    this.addToMyBooks =true;
   
    this.reloadData();
  }
  reloadData(){
    this.myBooks= this.myBooksService.getAllMyBooks(this.userId);

 }
  

   onBookLinkClicked(id: number){
         this.router.navigate(['/bookDetail',this.userId ,id]);
   }
   onAddToMyBooks(){
     this.addToMyBooks =false;
    this.router.navigate(['myBooks',this.userId,'add'])

   }
   onNotificationClick(){
     this.router.navigate(['/notification', this.userId]);
   }

   onNewBooks(){
    this.router.navigate(['/availableBooks', this.userId]);
   }

   myAvailableBooks(){
     this.router.navigate(['/mySharedBook', this.userId]);
   }
}
