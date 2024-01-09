import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { AddBookComponent } from './AddBook/AddBook.component';
import { ManageBookComponent } from './ManageBook/ManageBook.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule } from '@angular/common/http'
import { BookDetailsComponent } from './BookDetails/BookDetails.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      HomeComponent,
      AddBookComponent,
      ManageBookComponent,
      BookDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
