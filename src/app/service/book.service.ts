import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Book {
  name:any;
  price:any;
  author:any;
}
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBooks() {
    return this.http.get<any>('assets/book.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => { return data; });
    }
}
