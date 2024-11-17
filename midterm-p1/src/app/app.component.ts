import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeeklyGoalsComponent } from "./weekly-goals/weekly-goals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeeklyGoalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'midterm-p1';
}
