import { Component, OnInit } from '@angular/core';
import { DbService } from '../Services/Db.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-AddBook',
  templateUrl: './AddBook.component.html',
  styleUrls: ['./AddBook.component.css']
})
export class AddBookComponent implements OnInit {
  editDetails:any={

  }
  constructor(private db:DbService) { }

  ngOnInit() {
  }
  bookData = {
    bookID: '',
    bookName: '',
    authorName: '',
    publishedBy: '',
    year: 0,
    description: ''
  };
  addBook() {
   this.db.addbook(this.bookData).subscribe(response=>
    {
      alert("Book Added")
    })
  }

}
