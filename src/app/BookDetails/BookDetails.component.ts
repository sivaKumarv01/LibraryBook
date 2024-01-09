import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../Services/Db.service';

@Component({
  selector: 'app-BookDetails',
  templateUrl: './BookDetails.component.html',
  styleUrls: ['./BookDetails.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookid:any
  bookdetails:any
  details:any
  constructor(private route:ActivatedRoute,private db:DbService) {
    this.route.queryParams.subscribe(params => {
      this.bookid = params['bookid'];
      this.bookid=Number(this.bookid)
      db.getBookDetails().subscribe(data=>
        {
          this.details=data
          this.bookdetails=this.details.find((book: any)=>
            {
              return book.bookId===this.bookid
              
            })
            console.log(this.bookdetails)
        })
    });

  }
  ngOnInit() {
  }


}
