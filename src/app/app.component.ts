import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './share/app-material/app-material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular';
}
