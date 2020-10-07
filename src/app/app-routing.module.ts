import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { OpenLibraryComponent } from './open-library/open-library.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { CreateMyBooksComponent } from './my-books/create-my-books/create-my-books.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CreateMyProfileComponent } from './my-profile/create-my-profile/create-my-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MyProfileListComponent } from './my-profile/my-profile-list/my-profile-list.component';
import { AvailableBooksDetailsComponent } from './available-books/available-books-details/available-books-details.component';
import { UpdateMyBooks2Component } from './update-my-books2/update-my-books2.component';
import { NotificationComponent } from './notification/notification.component';
import { MySharedBookComponent } from './my-shared-book/my-shared-book.component';
import { MySharedBookDetailsComponent } from './my-shared-book/my-shared-book-details/my-shared-book-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'' , redirectTo:'openLibrary', pathMatch:'full'},
   {path:'openLibrary', component:OpenLibraryComponent},
   {path:'aboutUs', component:AboutUsComponent},
   {path:'myBooks/:userId', component:MyBooksComponent},
     
     {path:'myBooks/:userId/add', component:CreateMyBooksComponent}
   ,
   {path:'availableBooks/:userId',component:AvailableBooksComponent}, 
     {path : 'availableBooks/:userId/:id', component:AvailableBooksDetailsComponent}
   ,
   {path:'myProfile',component:MyProfileComponent, children:[
     {path:'createMyProfile', component:CreateMyProfileComponent},
     {path:'myProfileList', component:MyProfileListComponent}
   ]},
   {path :'bookDetail/:userId/:id', component:BookDetailComponent} ,
{path:'updateMyBooks/:userId/:id', component:UpdateMyBooks2Component}
   ,
   {path: 'notification/:userId', component:NotificationComponent},
   {path: 'mySharedBook/:userId', component:MySharedBookComponent},
     {path:'mySharedBook/:userId/:id', component:MySharedBookDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
