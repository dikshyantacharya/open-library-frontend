import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  baseUrl ="http://localhost:8080/openlibrary-rest/api/notification"
  constructor(private http :HttpClient) { }
  getAllMyNotification(userId: number): Observable<any>{
    return this.http.get<Notification[]>(`${this.baseUrl}/${userId}` );
  }
  createMyNotification(notification :Object) :Observable<Object>{
    return this.http.post(`${this.baseUrl}`, notification);
  }
  deleteMyNotification( userId : number,id: number) :Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${userId}/${id}` );
  }
  deleteAllMyNotification(userId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }
  getSentNotification(userId: number , id :number) : Observable<any>{
    return this.http.get<Notification>(`${`${this.baseUrl}`}/findNotification/${`${userId}/${id}`}`)
  }

}
