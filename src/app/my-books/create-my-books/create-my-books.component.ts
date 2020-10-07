
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { MyBooksService } from 'src/app/common/my-books/my-books.service';

@Component({
  selector: 'app-create-my-books',
  templateUrl: './create-my-books.component.html',
  styleUrls: ['./create-my-books.component.css']
})
export class CreateMyBooksComponent implements OnInit {
  userId: number;
  created : boolean
  myBooks :Books;
  createMyBooksForm :FormGroup;
  constructor(private myBooksService: MyBooksService, private router :Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userId =this.route.snapshot.params['userId']
    console.log(this.userId)
        this.createMyBooksForm= new FormGroup({
      'bookName': new FormControl(null),
      'author': new FormControl(null),
      'bookType': new FormControl(null),
      'imageUrl': new FormControl(null),
      'userId': new FormControl(this.userId),
    });
  }
  onSubmit(){
    this.created =true;
    console.log(this.createMyBooksForm.value);
    this.myBooksService.createMyBooks(this.createMyBooksForm.value).subscribe(data =>{
    console.log(data);

    }, error =>console.log(error));
   
  }

}
