import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { __await, __awaiter } from 'tslib';
import { MyProfile } from '../common/my-profile/my-profile';
import { MyProfileService } from '../common/my-profile/my-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myProfileId: number;
  myProfile: MyProfile;
  createLoginClicked: boolean;
  placeholder: String;



  constructor(private toastr: ToastrService, private router: Router, private myProfileService: MyProfileService) { }

  ngOnInit(): void {
    this.createLoginClicked = true;
    this.placeholder = "Enter ProfileId"
  }

  async onEnterClicked(id: number) {
    this.myProfileService.getMyProfileById(id).subscribe(data => {
      console.log(data);
      this.myProfile = data;
      this.entry(id);
    }, error => { this.toastr.error('Error Id', 'Access Denied!'); });
  }
  value(event: boolean){
  console.log(event);
  }


  entry(id: number) {
    if (this.myProfile !== null) {
      this.router.navigate(['/myBooks', id]);
    }
  }

  onListClicked() {
    this.createLoginClicked = !this.createLoginClicked;
    this.router.navigate(['/myProfile/myProfileList']);
  }
  onCreateLoginClicked() {
    this.createLoginClicked = !this.createLoginClicked;
  }
 



}
