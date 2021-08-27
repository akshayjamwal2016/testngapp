import { Component, OnInit } from '@angular/core';
import { Workout } from './workout.model';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  public workouts: Workout[];
  constructor(public workOutService : WorkoutService) { }

  ngOnInit(): void {
    this.createModel();
  }  


  createModel():void {   
    
    this.workOutService.getWorkoutDetails().subscribe((data: any[])=>{
      console.log(data);
      this.workouts = data;
    });
  }

}
