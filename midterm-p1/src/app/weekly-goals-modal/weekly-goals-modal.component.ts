import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoalsService } from '../services/goals.service';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-weekly-goals-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './weekly-goals-modal.component.html',
  styleUrl: './weekly-goals-modal.component.scss'
})
export class WeeklyGoalsModalComponent {

  constructor(
    private dialogRef: MatDialogRef<WeeklyGoalsModalComponent>,
    private goalsService: GoalsService,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; tag: string }
  ) {
    this.goals = this.goalsService.getGoals();
  }

  goals: {name: string, hash:string}[] = [];
  inputGoalName: string = '';
  inputGoalHash: string = '#apply-internships';
  hashColor: string = '#2DBDB1';

  saveGoal() {
    if(this.inputGoalName) {
      this.goalsService.addGoal({name: this.inputGoalName, hash: this.inputGoalHash});
      this.inputGoalName = '';
    }
    this.dialogRef.close();
  }

  onKeyboardPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.saveGoal();
    }
  }

  changeHashColor() {
    let hashkey: {[key: string]: string} = {
      '#apply-internships': '#2DBDB1',
      '#class-algorithms': '#FFB987'
    };
    this.hashColor = hashkey[this.inputGoalHash];
  }

  closeModal() {
    this.dialogRef.close();
  }

  /*@ViewChild('myModal', {static: false}) modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }*/
}
