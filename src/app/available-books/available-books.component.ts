import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../common/books';
import{ AvailableBooksService } from '../common/available-books/available-books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
availableBooks : Observable<Books[]>;
isAvailableBook : boolean;
onDetail: boolean;
userId : number;
  constructor(private router : Router, private availableBooksService :AvailableBooksService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.userId =this.route.snapshot.params['userId'];
    this.reloadedData();
  }
  reloadedData(){
    this.availableBooks= this.availableBooksService.getAllAvailableBooks(this.userId);

  
 }
  
  onBookLinkClicked(id: number){
    this.onDetail= true;
    this.router.navigate(['/availableBooks', this.userId, id]);
}
  }


