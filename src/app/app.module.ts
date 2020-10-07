import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵgetDebugNode__POST_R3__ } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule }from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { OpenLibraryComponent } from './open-library/open-library.component';
import { CreateMyProfileComponent } from './my-profile/create-my-profile/create-my-profile.component';
import { CreateMyBooksComponent } from './my-books/create-my-books/create-my-books.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MyProfileListComponent } from './my-profile/my-profile-list/my-profile-list.component';
import { AvailableBooksDetailsComponent } from './available-books/available-books-details/available-books-details.component';
import { NotificationComponent } from './notification/notification.component';
import { MySharedBookComponent } from './my-shared-book/my-shared-book.component';
import { MySharedBookDetailsComponent } from './my-shared-book/my-shared-book-details/my-shared-book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateMyBooks2Component } from './update-my-books2/update-my-books2.component';



@NgModule({
  declarations: [
   
    AppComponent,
    MyProfileComponent,
    AvailableBooksComponent,
    MyBooksComponent,
    OpenLibraryComponent,
    CreateMyProfileComponent,
    CreateMyBooksComponent,
    AboutUsComponent,
    BookDetailComponent,
    MyProfileListComponent,
    AvailableBooksDetailsComponent,
    NotificationComponent,
    MySharedBookComponent,
    MySharedBookDetailsComponent,
    UpdateMyBooks2Component,
  

   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
