import { Component, OnInit } from '@angular/core';
import { DbService } from '../Services/Db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ManageBook',
  templateUrl: './ManageBook.component.html',
  styleUrls: ['./ManageBook.component.css']
})
export class ManageBookComponent implements OnInit {
  bookDetails:any
  editDetails:any={
    id:Number,
    bookId:Number,
    title:String,
    Author:String,
    Year:Number,
    Descrption:String,
    image:String

  }
  constructor(private db:DbService,private route:Router) {

   }
   edit=false
   showDetails(id:number)
   {
    this.edit=true;
    this.editDetails=this.bookDetails.find((book: any)=>
    {
      return book.bookId===id
    })
   }
   saveChanges(id:any)
   {
     console.log(this.editDetails)
     this.db.editBookDetails(this.editDetails,id).subscribe(response=>
      {
        alert("Details Edited Successfully")
      })
     this.edit=false
     location.reload()
   }
   deleteBook(id:any)
   {
    if(window.confirm("Are you sure to delete this Book"))
    {
      this.db.deleteBook(id).subscribe(response=>
        {
          alert("Book Deleted Successfully")
        })
    }
    else
    {
      console.log("no");
    }
    location.reload()

   }

  ngOnInit() {
    this.db.getBookDetails().subscribe(data=>
      {

        this.bookDetails=data
      })
  }

}
