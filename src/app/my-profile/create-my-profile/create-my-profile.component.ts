import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../../common/my-profile/my-profile.service'

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-my-profile',
  templateUrl: './create-my-profile.component.html',
  styleUrls: ['./create-my-profile.component.css']
})
export class CreateMyProfileComponent implements OnInit {
 
  myProfileForm: FormGroup;
  id :number;
  
  constructor(private myProfileService : MyProfileService, private router :Router,private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.myProfileForm= new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'address': new FormControl(null),
      'emailId': new FormControl(null),
    });

    
  }
    onSave(){
    
  }


  onSubmit(){
  
    console.log(this.myProfileForm.value);
    this.myProfileService.createMyProfile(this.myProfileForm.value).subscribe(data =>{
    console.log(data);
    

    }, error =>console.log(error));
      
    this.router.navigate(['/myProfile']);
  
  }
  
  

}
