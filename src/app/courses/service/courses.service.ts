import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { inject, Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json'
  httpClient = inject(HttpClient);

  constructor() {

  }

  list(){
     return this.httpClient.get<Course[]>(this.API)
     .pipe(
      first(),
      tap(courses => console.log(courses))
     );
  }
}
