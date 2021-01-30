import { faculty } from './../models/faculty';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FacultyService extends DataService {
  constructor(httpClient: HttpClient) {
    super('http://localhost:8082/faculty', httpClient);
  }
  faculty!: faculty;
  getFaculty() {
    return this.faculty;
  }

  setFaculty(f:any ) {
    this.faculty=f;
  }

}
