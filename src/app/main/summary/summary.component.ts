import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Task } from '../../../models/task.class';


@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  tasks:Task[] = []; 

  tasksInBoard?: number = undefined; 

  constructor(private taskService:TaskService){
   
  }

  ngOnInit(){
    //console.log(this.taskService.getLoadedTasks());
    this.taskService.getLoadedTasks()
      .then((data:any) => {
        console.log(data); 
      }); 
  }

}
