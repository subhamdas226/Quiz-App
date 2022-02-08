import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn():boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http:HttpClient) { }
  
  private registerUrl = "http://localhost:3000/api/addCandidate";
  // private getAllQuestions = "http://localhost:3000/api/getAllQuestions";
  registerCandidate(candidate:any) {
    return this.http.post<any>(this.registerUrl,candidate)
  }
  // getQuestions() {
  //   return this.http.get<any>(this.getAllQuestions);
  // }

  
}
