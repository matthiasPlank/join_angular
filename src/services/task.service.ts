import { Injectable } from '@angular/core';
import { Task } from '../models/task.class';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private loadedTasks:Task[] = [
    new Task({
      id: "",
      title: "Mein erster Task", 
      description: "", 
      category: "", 
      createdAt: new Date(),       
      assigned: [], 
      kanban: "", 
      priority: "", 
      subtasks: [] 
    }), 
    new Task({
      id: "",
      title: "Mein zweiter Task", 
      description: "", 
      category: "", 
      createdAt: new Date(),       
      assigned: [], 
      kanban: "in-progress", 
      priority: "", 
      subtasks: [] 
    })
  ] 

  loadedTasksSubject = new Subject<Task[]>();
  tasks$ = this.loadedTasksSubject.asObservable();

  constructor() {
    this.getLoadedTasks();
   }

  async getLoadedTasks(){
    setTimeout(() => {
      this.loadedTasksSubject.next(this.loadedTasks);  
    }, 1000);
  }


}
