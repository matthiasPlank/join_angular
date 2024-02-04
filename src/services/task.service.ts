import { Injectable } from '@angular/core';
import { Task } from '../models/task.class';

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
    })

  ] 

  constructor() { }


  async getLoadedTasks(){
    setTimeout(() => {
      return this.loadedTasks; 
    }, 1000);
  }


}
