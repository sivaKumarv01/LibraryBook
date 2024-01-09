import { Component, OnInit } from '@angular/core';
import { DbService } from '../Services/Db.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent  {
  bookDetails:any
  constructor(private db:DbService,private route:Router) {
    db.getBookDetails().subscribe(data=>
      {
        this.bookDetails=data
      })
   }
   showDetails(id:number)
   {
    this.route.navigate(['/book'], { queryParams: { bookid: id } })
   }

}
