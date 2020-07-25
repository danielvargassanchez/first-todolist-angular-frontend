import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  task: Task = new Task();
  tasks: Array<Task> = new Array<Task>();
  form: FormGroup;
  created: boolean = false;
  edited:boolean=false;
  esNuevo:boolean;
  titulo:string;

  constructor(private Service: TaskService, private fbForm: FormBuilder,
    private RutaActiva: ActivatedRoute) {
    this.task = Service.task;
    this.tasks = Service.tasks;
    // todo lo que se recibe por url se obtiene en string  debe parsearse
    this.esNuevo=JSON.parse(this.RutaActiva.snapshot.params.esNuevo);
    this.titulo=this.esNuevo? 'New Task': 'Edit Task';
  }

  ngOnInit(): void {
    this.createForm();

    if(!this.esNuevo){
      this.form.setValue({
        title:this.Service.task.title,
        description:this.Service.task.description,
        entregar:this.Service.task.entregar
      });
    }
  }

  createForm() {
    this.form = this.fbForm.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      entregar: ['', Validators.required]
    });
  }
  save() {

    let newTask: Task = new Task();
    newTask.idTask = 100;
    newTask.title = this.form.root.value.title;
    newTask.description = this.form.value.description;
    newTask.entregar = this.form.value.entregar;
    newTask.entregado = false;
    this.Service.tasks.push(newTask);

    this.created = true;
    setTimeout(() => {
      this.created = false;
    }, 3000);
  }

  edit(){
    let id:number=this.Service.tasks.indexOf(this.Service.task);

    this.Service.task.title=this.form.value.title;
    this.Service.task.description=this.form.value.description;
    this.Service.task.entregar=this.form.value.entregar;

    this.Service.tasks[id]=this.Service.task;

    this.edited=true;
    setTimeout(()=>{
      this.edited=false;
    },3000);
  }



}
