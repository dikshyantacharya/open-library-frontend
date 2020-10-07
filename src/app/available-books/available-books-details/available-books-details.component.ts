import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AvailableBooksService } from 'src/app/common/available-books/available-books.service';
import { Books } from 'src/app/common/books';
import { MyProfile } from 'src/app/common/my-profile/my-profile';
import { MyProfileService } from 'src/app/common/my-profile/my-profile.service';
import { NotificationService } from 'src/app/common/notification/notification.service';

@Component({
  selector: 'app-available-books-details',
  templateUrl: './available-books-details.component.html',
  styleUrls: ['./available-books-details.component.css']
})
export class AvailableBooksDetailsComponent implements OnInit {

  constructor(private myProfileService :MyProfileService,private notificationService: NotificationService,private route :ActivatedRoute, private router :Router, private availableBooksService :AvailableBooksService) { }
  id :number;
  userId :number;
  availableBooks: Books;
  requested :boolean;
  notification: Observable<Notification>;
  gotNotification: Notification;
  myProfile :MyProfile;
  alreadyRequested: boolean;
  ngOnInit(): void {

    this.availableBooks =new Books();
   this.id =this.route.snapshot.params['id'];
   this.userId =this.route.snapshot.params['userId'];
  this.notificationService.getSentNotification(this.userId, this.id).subscribe(data=>{
   this.gotNotification=data;
      if(this.gotNotification===null){
    this.alreadyRequested=false;
  }
   else{
    this.alreadyRequested= true;
   }

}, error=>{console.log(error)});

   this.myProfileService.getMyProfileById(this.userId).subscribe(data=>{
   console.log(data);
   this.myProfile=data;
   }, error=>console.log(error));
  
  
  this.availableBooksService.getAvailableBookById(this.userId,this.id).subscribe(data =>{
    console.log(data);
    
    this.availableBooks= data;
  },error=> console.log(error)
  ) ;
    
  

  }
 onRequestedBook(){
 
   this.notificationService.createMyNotification({senderId :this.userId,availableBooksId :this.availableBooks.id,userId:this.availableBooks.userId, notification:`Guest ${this.myProfile.emailId} has requested ${this.availableBooks.bookName}`}).subscribe(data=>{
     console.log(data);
   });
    
   this.alreadyRequested=true;
   
   }

     


 
 availableBooksList(){
  
   this.router.navigate(['/availableBooks', this.userId]);
   }



   
  }


