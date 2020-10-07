import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {NotificationService} from '../common/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Observable<Notification[]>;
  userId :number;
  constructor(private notificationService:NotificationService, private route : ActivatedRoute , private router: Router) { }
  
  ngOnInit(): void {
    this.userId =this.route.snapshot.params['userId'];
  this.notifications =this.notificationService.getAllMyNotification(this.userId);
  }
  deleteMyNotification(id :number){
    this.notificationService.deleteMyNotification(this.userId,id).subscribe(data=>{
      console.log(data);
      this.notifications =this.notificationService.getAllMyNotification(this.userId);

    })
    


  }
  onDeleteAll(){
    this.notificationService.deleteAllMyNotification(this.userId).subscribe(data=>{
      console.log(data);
     
    })
  }

}
