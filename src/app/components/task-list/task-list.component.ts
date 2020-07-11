import { Component, Inject, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  name = 'Angular 6';
  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};

  constructor(private http: HttpService, public dialog: MatDialog) { }

  private Tasklist: Task[] = [
  ]

  public displayedColumns: string[] = ['No', 'Description', 'Priority', 'Status','edit','delete'];
  public taskListData;
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  
  title = 'paginator';

  ngOnInit() {
    this.getTaskList();
    /* const name = "-MBiNnnd0Gq27BGHa50x"
    this.http.deleteData(`https://tasksmanager-302f5.firebaseio.com/Task/${name}.json`).subscribe(data =>{
      console.log(data);
    }); */
    /* const name = "-MBiMmetEVzkwhmN_mjM"
    this.http.addData(`https://tasksmanager-302f5.firebaseio.com/Task.json`).subscribe(data =>{
      console.log(data);
    }); */
  } 
  public editTask(val){
    console.log(val)
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      data: val
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result.eventName == "add"){
        this.http.updateData(`https://tasksmanager-302f5.firebaseio.com/Task/${val.name}.json`,result).subscribe(data =>{
          console.log(data);
          this.getTaskList();
        });
      }
    });
  }
  public deleteTask(val){
    this.http.deleteData(`https://tasksmanager-302f5.firebaseio.com/Task/${val.name}.json`).subscribe(data =>{
      this.getTaskList();
    });
  }
  public addTask(){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result.eventName == "add"){
        this.http.addData(`https://tasksmanager-302f5.firebaseio.com/Task.json`,result).subscribe(data =>{
          console.log(data);
          this.getTaskList();
        });
      }
    });
  }

  private getTaskList(){
    this.http.getData(`https://tasksmanager-302f5.firebaseio.com/Task.json`).subscribe(data =>{
      //console.log(data);
      this.Tasklist = [];
      for(let i in data){
        data[i].name = i;
        this.Tasklist.push(data[i])
        this.Tasklist.sort(function(a:any, b:any){return a.id - b.id});
      }
      console.log(this.Tasklist)
      this.taskListData = new MatTableDataSource<Task>(this.Tasklist);
      this.taskListData.paginator = this.paginator;
    });
  }
}

export interface Task {
  id: string;
  description: string;
  priority: string;
  status: string;
}