import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyProfile } from './my-profile'
@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  baseUrl ="http://localhost:8080/openlibrary-rest/api/profile"
  constructor(private http :HttpClient) { }

  getAllMyProfile(): Observable<any>{
    return this.http.get<MyProfile[]>(`${this.baseUrl}`);
  }
  getMyProfileById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMyProfile(profile: Object) :Observable<Object>{
    return this.http.post(`${this.baseUrl}`, profile);
  }
  updateMyProfile(value : any, id: number) :Observable<Object>{
    return this.http.put(`${this.baseUrl}`, value);
  }
  deleteMyProfileById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
