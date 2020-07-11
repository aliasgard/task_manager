import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  /*const mockDialogRef = {
    onCancelClick: jasmine.createSpy('close')
  };*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        MatDialogRef,
        MAT_DIALOG_DATA ],
      declarations: [ AddTaskComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddTaskComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
 });
  it(`should have as title 'Add Task'`, () => {
    const fixture = TestBed.createComponent(AddTaskComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Add Task');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it('#onCancelClick should close the dialog', () => {
    component.onCancelClick();
    expect(mockDialogRef.onCancelClick).toHaveBeenCalled();
  });
  it('#onOKClick should close the dialog', () => {
    component.onOKClick();
    expect(mockDialogRef.onCancelClick).toHaveBeenCalled();
  });*/
});
