import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

   apiUrl: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  createUser(data: User): Observable<User> {

    return this.http.post<User> (this.apiUrl, data);
      
  }
  getUsers(): Observable<Array<User>>  
  {
    return this.http.get <Array<User>> (this.apiUrl,{headers: this.headers});
  }
   getUser(userId:string): Observable<User>  
  {
    return this.http.get <User> (`this.apiUrl/${userId}`,{headers: this.headers});
  }

  updateUser(userId: string, data: User): Observable<User>
  {
      return this.http.put<User> (`this.apiUrl/${userId}`,data,{ headers: this.headers })

  }
  deleteUser(userId: string) : Observable<User>
  {
    return this.http.delete <User> (`this.apiUrl/${userId}`,{headers: this.headers});
  }



}
