import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  taskList: Task[] = [];
  phTask: string = "";

  addTask()
  {
    this.taskList.push({ task: this.phTask, done: false, edit: false });
    this.phTask = "";
  }

  updateTask(i: number)
  {
    if(this.taskList[i].edit == true)
    {
      this.taskList[i].done = false;
      this.taskList[i].edit = false;
    }
    else
    {
      this.taskList[i].edit = true;
    }
  }

  removeTask(i: number)
  {
    this.taskList.splice(i, 1);
  }
}

interface Task
{
  task: string;
  done: boolean;
  edit: boolean;
}