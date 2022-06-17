import { Book } from './model/Book';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books:Array<Book> = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(book => {
      this.books = book
    })
  }

}
