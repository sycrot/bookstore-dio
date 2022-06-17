import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../components/bookstore-app/product-list/model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'https://sheet.best/api/sheets/913f8817-1b37-4a04-8f15-1abd8748d0f7'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBooks():Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl)
  }
}
