
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient: HttpClient) { }
  private serverUrl = "https://akstestwebapp.azurewebsites.net/api/workout";
  public getWorkoutDetails()
  {
    return this.httpClient.get(this.serverUrl);    
  }
}
