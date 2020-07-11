import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {  MatPaginatorModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule, MatOptionModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaskListComponent,
        AddTaskComponent
      ],
      providers: [HttpService],
      imports: [MatPaginatorModule, 
        MatTableModule, 
        MatButtonModule, 
        MatIconModule, 
        MatDialogModule, 
        MatOptionModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule,
        HttpClientModule,
        BrowserAnimationsModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task-manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('task-manager');
  });
});
