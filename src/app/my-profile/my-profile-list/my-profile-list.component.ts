import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProfile } from 'src/app/common/my-profile/my-profile';
import { MyProfileService } from 'src/app/common/my-profile/my-profile.service';

@Component({
  selector: 'app-my-profile-list',
  templateUrl: './my-profile-list.component.html',
  styleUrls: ['./my-profile-list.component.css']
})
export class MyProfileListComponent implements OnInit {

  myProfiles : Observable<MyProfile[]>
  constructor(private myProfileService : MyProfileService) { }

  ngOnInit(): void {
    this.myProfiles= this.myProfileService.getAllMyProfile();
  }
  deleteMyProfile(id :number){
      this.myProfileService.deleteMyProfileById(id).subscribe(data =>{
        console.log(data);
        this.myProfiles= this.myProfileService.getAllMyProfile();
      },error=>console.log(error))
  }

}
