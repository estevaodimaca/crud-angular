import { CoursesService } from './../service/courses.service';
import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { AppMaterialModule } from '../../share/app-material/app-material.module';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [];

  displayedColumns: string[] = ['id', 'name', 'category'];

  coursesService = inject(CoursesService);

  constructor(){
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {

  }
}
