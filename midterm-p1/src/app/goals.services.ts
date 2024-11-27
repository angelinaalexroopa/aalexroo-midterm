import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GoalsService {
    private goals: {name: string; hash: string}[] = [
        { name: 'Finish Google cover letter...', hash: '#apply-internships' },
        { name: 'Apply to Microsoft', hash: '#apply-internships' },
        { name: 'Practice implementing data structure...', hash: '#class-algorithms' }
    ];

    getGoals() {
        return this.goals;
    }

    addGoal(goal: {name: string; hash: string }) {
        this.goals.push(goal);
    }

    updateGoal(index: number, goal: {name: string; hash: string }) {
        this.goals[index] = goal;
    }
}