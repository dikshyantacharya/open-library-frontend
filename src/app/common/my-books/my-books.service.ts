import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../books';

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {
baseUrl ="http://localhost:8080/openlibrary-rest/api/books/myBooks"
  constructor(private http :HttpClient) {
}

getAllMyBooks(userId: number) :Observable<any>{
  return this.http.get<Books[]>(`${this.baseUrl}/${userId}`);
}
getMyBookById( userId :number, id :number) : Observable<any>{
  return this.http.get<Books>(`${this.baseUrl}/${userId}/${id}`);
}
createMyBooks(book :Object) : Observable<Object>{
  return this.http.post(`${this.baseUrl}`,book);
} 
updateMyBooks( id: number, value: any ){
  return this.http.put(`${this.baseUrl}/${id}`, value);
}
deleteMyBooksById(id :number) : Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
