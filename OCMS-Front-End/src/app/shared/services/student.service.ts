import { student } from './../models/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService extends DataService {
  form: any;
  student!: student;
  constructor(httpClient: HttpClient) {
    super('http://localhost:8081/coordinator/students', httpClient);
  }
  getStudent() {
    return this.student;
  }

  setStudent(s: any) {
    this.student = s;
  }
}
