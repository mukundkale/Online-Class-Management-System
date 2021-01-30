import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends DataService{

  constructor(httpClient:HttpClient) {
    super("http://localhost:8081/coordinator/schedule",httpClient);
   }
}
