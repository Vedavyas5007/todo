import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

  task_text:string='';
  tasks:string[]=[];
  completed_tasks:string[]=[];

  addText(event:any){
    this.task_text=event.target.value;
  //  this.tasks.push(event.target.value);
  }
  addTask(){

    if(this.task_text==''){
      alert("please enter a task");
    }else{
      this.tasks.push(this.task_text);
      let v:any=document.getElementById('inp');
      v.value='';
      this.task_text='';
    }
    
  }
  deleteTask(index:any){
    const audio= new Audio("drop.mp3");
    audio.play();
    setTimeout(
      ()=>{
        this.tasks.splice(index,1);
      },500
    )
  }
  moveTask(index:any){
    const audio= new Audio("drop.mp3");
    audio.play();
    setTimeout(
      ()=>{

        this.completed_tasks.push(this.tasks[index]);
        this.tasks.splice(index,1);

      },500
    )
  }
}
