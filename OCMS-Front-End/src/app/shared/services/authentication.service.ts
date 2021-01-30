import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  role:any;
  // authUrl = "http://localhost:8080/login/name/";

  // constructor(private http: HttpClient) { }

  // login(model: any) {
  //   console.log(model);
  //   return this.http.post(this.authUrl + 'login', model).pipe(
  //     map((response: any) => {
  //       const user = response;
  //       if (user.result.succeeded) {
  //         localStorage.setItem('token', user.token);
  //       }
  //     })
  //   );
  //}
  public setRole(role:any){
    this.role=role;
  }
  public getRole(){
    return this.role;
  }
}
