import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  /*const mockDialogRef = {
    onCancelClick: jasmine.createSpy('close')
  };*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        MatDialogRef,
        MAT_DIALOG_DATA ],
      declarations: [ TaskListComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
