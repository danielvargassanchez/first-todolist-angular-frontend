import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../models/task';
import { RouterModule, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  task:Task= new Task();
  tasks:Array<Task>= new Array<Task>();

  constructor(private Servicio:TaskService, private Ruta:Router) {
    this.tasks= Servicio.tasks;
   }

  ngOnInit(): void {
    console.log(this.tasks);
  }

  showTask(task:Task){
    this.Servicio.task=task;
    this.Ruta.navigateByUrl('show-task');
  }

  newTask(){
    this.Ruta.navigateByUrl('new-task');
  }

  finished(id:number){
    this.Servicio.tasks.forEach(task => {
      if(task.idTask==id){
        task.entregado=true;
      }
    });
  }

  delete(task:Task){
    this.Servicio.tasks.splice(this.Servicio.tasks.indexOf(task),1);
    
  }
}
