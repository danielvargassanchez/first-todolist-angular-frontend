import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task:Task= new Task();
  tasks:Array<Task>= new Array<Task>();

  
  constructor() { 
    for(let i:number=1; i<21; i=i+1){
      let newTask:Task= new Task();
      newTask.idTask=i;
      newTask.title=`titulo ${i}`;
      newTask.description=`descripcion  ${i}`;
      newTask.entregar=new Date(`01,${i},2019`);
      newTask.entregado= false;

      this.tasks.push(newTask);
    }
  }
}
