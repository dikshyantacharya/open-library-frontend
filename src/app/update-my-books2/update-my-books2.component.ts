import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyBooksService } from '../common/my-books/my-books.service';

@Component({
  selector: 'app-update-my-books2',
  templateUrl: './update-my-books2.component.html',
  styleUrls: ['./update-my-books2.component.css']
})
export class UpdateMyBooks2Component implements OnInit { id:number;
  updateMyBooksForm: FormGroup;
  isOnUpdate =true;
    constructor( private route :ActivatedRoute, private myBooksService :MyBooksService) { }
  
    ngOnInit(): void {
    
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
   
      this.updateMyBooksForm= new FormGroup({
        'bookName': new FormControl(null),
        'author': new FormControl(null),
        'bookType': new FormControl(null),
        'imageUrl': new FormControl(null),
      });
    }
    onSubmit(){
      this.updateMyBooks();
    }
    updateMyBooks(){
      console.log(this.updateMyBooksForm.value)
      this.myBooksService.updateMyBooks(this.id, this.updateMyBooksForm.value)
      .subscribe(data => {
        console.log(data);
       
        
      }, error => console.log(error));
      this.isOnUpdate = false;
  }
    }
  
  
  