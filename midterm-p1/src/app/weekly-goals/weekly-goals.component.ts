import { Component, ViewChild } from '@angular/core';
import { WeeklyGoalsModalComponent } from '../weekly-goals-modal/weekly-goals-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { GoalsService } from '../services/goals.services';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './weekly-goals.component.html',
  styleUrl: './weekly-goals.component.scss'
})
export class WeeklyGoalsComponent {

  goals: {name: string, hash: string} [];

  constructor(private dialog: MatDialog, private goalsService: GoalsService) {
    this.goals = this.goalsService.getGoals();
  }

  openModal(edit?: {name: string; hash:string}) {
    const dialogRef = this.dialog.open(WeeklyGoalsModalComponent, {
      width: '900px',
      height: '640px',
      data: edit
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if(edit) {
          const index = this.goals.indexOf(edit);
          if(index !== -1) {
            this.goalsService.updateGoal(index, result);
          } else {
            this.goalsService.addGoal(result);
          }
        }
      }
    });
  }
}
 /* @ViewChild('modal', {static: false}) modal: WeeklyGoalsModalComponent

  openModal() {
    this.modal.open();
  } */

