import { Component, Inject, ViewChild, Input } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {

  @ViewChild('no' ) no;
  @ViewChild('description' ) description;
  @ViewChild('priority' ) priority;
  @ViewChild('status' ) status;

  @Input()

  private taskObj:any = {};
  public title;
  public okDisable = true;

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
    }

  ngOnInit(){
    if(this.data){
      this.no.nativeElement.value = this.data.id;
      this.description.nativeElement.value = this.data.description;
      this.priority.nativeElement.value = this.data.priority;
      this.status.nativeElement.value = this.data.status;
      this.title = "Edit Task";
      this.okDisable = false;
    } else {this.title = "Add Task";}
  }
  public onCancelClick(): void {
    //this.taskObj = {};
    this.taskObj.eventName = "cancel";
    //this.dialogRef.close();
  }

  public onOKClick(){
    //this.taskObj = {};
    this.taskObj.eventName = "add";
    this.taskObj.id = this.no.nativeElement.value;
    this.taskObj.description = this.description.nativeElement.value;
    this.taskObj.priority = this.priority.nativeElement.value;
    this.taskObj.status = this.status.nativeElement.value;
    //console.log(this.status.nativeElement.value);
  }
  public textChange(){
    if(this.no.nativeElement.value != "" && this.description.nativeElement.value != "" && this.priority.nativeElement.value != "" && this.status.nativeElement.value != ""){
      this.okDisable = false;
    } else {
      this.okDisable = true;
    }
  }
}
