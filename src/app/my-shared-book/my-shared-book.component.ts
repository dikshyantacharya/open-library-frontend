import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AvailableBooksService } from '../common/available-books/available-books.service';
import { Books } from '../common/books';

@Component({
  selector: 'app-my-shared-book',
  templateUrl: './my-shared-book.component.html',
  styleUrls: ['./my-shared-book.component.css']
})
export class MySharedBookComponent implements OnInit {
mySharedBooks :Observable<Books[]>
userId:number;
  constructor(private route : ActivatedRoute, private router:Router, private availableBooksService :AvailableBooksService ) { }

  ngOnInit( ): void {
    this.userId =this.route.snapshot.params['userId'];
    this.reloadData();
  }
  reloadData(){
    this.mySharedBooks =this.availableBooksService.getAllMyAvailableBooks(this.userId)
  }
  onBookLinkClicked(id: number){
    this.router.navigate(['mySharedBook',this.userId, id]);
  }

}
