import { Component, OnInit } from '@angular/core';
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

  courses: Course[] = [
    {id: "1", name: "Angular", category: "frontend"}
  ];

  displayedColumns: string[] = ['id', 'name', 'category'];

  ngOnInit(): void {

  }
}
