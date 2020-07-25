import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent implements OnInit {

  task:Task= new Task();
  tasks:Array<Task>= new Array<Task>();

  constructor(private Servicio:TaskService,private Ruta:Router) { 
    this.task=Servicio.task;
    this.tasks=Servicio.tasks;
  }

  ngOnInit(): void {
    
  }
  edit(task:Task){
    this.Servicio.task=task;
    this.Ruta.navigateByUrl('new-task/false');
  }
}
