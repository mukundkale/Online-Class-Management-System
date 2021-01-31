import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { NotFoundError } from '../errors/not-found-error';
import { BadInput } from '../errors/bad-input';
import { AppError } from '../errors/app-error';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // role:any;
  authUrl = "http://localhost:8081/login";

  constructor(private http: HttpClient) { }

  login(f1:string,f2:string) {
      return this.http.get<user>(this.authUrl+"/"+f1+"/"+f2).pipe(catchError(this.errorHandler));
    }

    private errorHandler(error: Response) {
      if (error.status === 400) return throwError(new BadInput(error.json()));
  
      if (error.status === 404) return throwError(new NotFoundError());
      return throwError(new AppError(error));
    }
  }

