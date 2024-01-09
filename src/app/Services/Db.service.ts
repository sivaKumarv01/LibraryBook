import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

constructor(private http:HttpClient ) {

 }
getBookDetails(){
  return this.http.get("http://localhost:3000/BookDetails")
}
addbook(data:any) {
  return this.http.post("http://localhost:3000/BookDetails",data)
}
editBookDetails(data:any,id:any) {
  return this.http.patch("http://localhost:3000/BookDetails/"+id,data,id)
}
deleteBook(id:any){
  return this.http.delete("http://localhost:3000/BookDetails/"+id,id)
}
}
