import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  httpClient = inject(HttpClient);

  constructor() {
    
  }

  list(): Course[]{
     return [
      {id: "1", name: "Angular", category: "frontend"}
    ];
  }
}
