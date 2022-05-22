import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Book, BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  first = 0;

  rows = 10;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().
      then(books => this.books = books);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.books ? this.first === (this.books.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.books ? this.first === 0 : true;
  }





//   customSort(event: SortEvent) {
//     event.data.sort((data1) => {
//         let value1 = data1[event.field];
//         let result = null;

//         if (value1 == null && value2 != null)
//             result = -1;
//         else if (value1 != null && value2 == null)
//             result = 1;
//         else if (value1 == null && value2 == null)
//             result = 0;
//         else if (typeof value1 === 'string' && typeof value2 === 'string')
//             result = value1.localeCompare(value2);
//         else
//             result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

//         return (
          
          
          
//           event.order * result);
//     });
// }

}
