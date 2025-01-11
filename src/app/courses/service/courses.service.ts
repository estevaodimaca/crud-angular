import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { inject, Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://192.168.188.60:8080/api/courses'
  httpClient = inject(HttpClient);

  constructor() {

  }

  list(){
     return this.httpClient.get<Course[]>(this.API)
     .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
     );
  }
}
