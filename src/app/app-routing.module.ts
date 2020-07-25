import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NewTaskComponent } from './new-task/new-task.component';


const routes: Routes = [
  {
    path: '', component: TodolistComponent
  }
  , {
    path: 'show-task', component: ShowTaskComponent
  }
  , {
    path: 'new-task/:esNuevo', component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
