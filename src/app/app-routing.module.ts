import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AddBookComponent } from './AddBook/AddBook.component';
import { ManageBookComponent } from './ManageBook/ManageBook.component';
import { BookDetailsComponent } from './BookDetails/BookDetails.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'home',
  component:HomeComponent
},{
  path:'Addbook',
  component:AddBookComponent
},{
  path:'Editbook',
  component:ManageBookComponent
},
{
  path:'book',
  component:BookDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
