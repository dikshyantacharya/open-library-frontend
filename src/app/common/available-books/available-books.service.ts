import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../books';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvailableBooksService {
  extension: String ="myAvailableBooks";
  baseUrl ="http://localhost:8080/openlibrary-rest/api/books/availablebooks"
  constructor(private http : HttpClient) { }

  getAllMyAvailableBooks(userId : number): Observable<any>{
    return this.http.get<Books[]>(`${this.baseUrl}/${this.extension}/${userId}`);
  }

  getAllAvailableBooks(userId : number): Observable<any>{
    return this.http.get<Books[]>(`${this.baseUrl}/${userId}`);
  }

  getAvailableBookById(userId :number ,id :number): Observable<any>{
return this.http.get<Books>(`${this.baseUrl}/${this.extension}/${userId}/${id}`);
  }

updateAvailableBook(id: number, value :any ) :Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, value);

}
createAvailableBook(value :any) :Observable<Object>{
  return this.http.post(`${this.baseUrl}`, value);
}
deleteAvailableBooks(id :number) :Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
} 

}