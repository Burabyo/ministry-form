import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'activity-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  template: `
    <div class="form-container">
      <h2 class="form-title">Create New Activity</h2>
      <mat-horizontal-stepper [linear]="true" #stepper>

        <!-- Step 1 -->
        <mat-step [stepControl]="stepOne">
          <form [formGroup]="stepOne">
            <ng-template matStepLabel>Step 1: Basic Information</ng-template>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Title</mat-label>
              <input matInput formControlName="title" required />
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" required></textarea>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Activity Type</mat-label>
              <mat-select formControlName="activityType" required>
                <mat-option value="training">Training</mat-option>
                <mat-option value="seminar">Seminar</mat-option>
                <mat-option value="workshop">Workshop</mat-option>
                <mat-option value="other">Other</mat-option>
              </mat-select>
            </mat-form-field>

            <div class="btn-group">
              <button mat-button color="primary" matStepperNext [disabled]="!stepOne.valid">Next</button>
            </div>
          </form>
        </mat-step>

        <!-- Step 2 -->
        <mat-step [stepControl]="stepTwo">
          <form [formGroup]="stepTwo">
            <ng-template matStepLabel>Step 2: Schedule</ng-template>

            <mat-form-field appearance="outline" class="half-width">
              <mat-label>Start Day</mat-label>
              <input matInput [matDatepicker]="startPicker" formControlName="startDay" required />
              <mat-datepicker-toggle matSuffix [for]="startPicker"></mat-datepicker-toggle>
              <mat-datepicker #startPicker></mat-datepicker>
            </mat-form-field>

            <mat-form-field appearance="outline" class="half-width">
              <mat-label>End Day</mat-label>
              <input matInput [matDatepicker]="endPicker" formControlName="endDay" required />
              <mat-datepicker-toggle matSuffix [for]="endPicker"></mat-datepicker-toggle>
              <mat-datepicker #endPicker></mat-datepicker>
            </mat-form-field>

            <mat-form-field appearance="outline" class="half-width">
              <mat-label>Start Time</mat-label>
              <input matInput type="time" formControlName="startTime" required />
            </mat-form-field>

            <mat-form-field appearance="outline" class="half-width">
              <mat-label>End Time</mat-label>
              <input matInput type="time" formControlName="endTime" required />
            </mat-form-field>

            <div class="btn-group">
              <button mat-button matStepperPrevious>Back</button>
              <button mat-button color="primary" matStepperNext [disabled]="!stepTwo.valid">Next</button>
            </div>
          </form>
        </mat-step>

        <!-- Step 3 -->
        <mat-step [stepControl]="stepThree">
          <form [formGroup]="stepThree">
            <ng-template matStepLabel>Step 3: Assignments</ng-template>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Module</mat-label>
              <mat-select formControlName="moduleId" required>
                <mat-option *ngFor="let module of modules" [value]="module.id">{{ module.name }}</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Intake</mat-label>
              <mat-select formControlName="intakeId" required>
                <mat-option *ngFor="let intake of intakes" [value]="intake.id">{{ intake.name }}</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Trainer</mat-label>
              <input matInput formControlName="trainerId" required />
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Room</mat-label>
              <input matInput formControlName="roomId" required />
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Component</mat-label>
              <input matInput formControlName="componentId" required />
            </mat-form-field>

            <div class="btn-group">
              <button mat-button matStepperPrevious>Back</button>
              <button mat-button color="primary" matStepperNext [disabled]="!stepThree.valid">Next</button>
            </div>
          </form>
        </mat-step>

        <!-- Step 4 -->
        <mat-step [stepControl]="stepFour">
          <form [formGroup]="stepFour">
            <ng-template matStepLabel>Step 4: Final Details</ng-template>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Status</mat-label>
              <mat-select formControlName="status" required>
                <mat-option value="pending">Pending</mat-option>
                <mat-option value="active">Active</mat-option>
                <mat-option value="completed">Completed</mat-option>
              </mat-select>
            </mat-form-field>

            <div class="btn-group">
              <button mat-button matStepperPrevious>Back</button>
              <button mat-raised-button color="primary" (click)="onSubmit()" [disabled]="!stepFour.valid">Submit</button>
            </div>
          </form>
        </mat-step>

      </mat-horizontal-stepper>
    </div>
  `,
  styles: [`
    .form-container {
      width: 700px;
      margin: 40px auto;
      padding: 30px;
      background-color: #f8f8facc;
      border-radius: 10px;
      box-shadow: 0 8px 16px #f07cf036;
    }
    .form-title {
      text-align: center;
      color: #f07cf0;
      margin-bottom: 30px;
    }
    .full-width {
      width: 100%;
      margin-bottom: 20px;
    }
    .half-width {
      width: 48%;
      margin-right: 4%;
      display: inline-block;
    }
    .btn-group {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      color: #f07cf0
    }
    button[mat-button], button[mat-raised-button] {
      min-width: 100px;
    }
  `]
})
export class ActivityForm {
  stepOne: FormGroup;
  stepTwo: FormGroup;
  stepThree: FormGroup;
  stepFour: FormGroup;

  modules = [
    { id: 'mod1', name: 'Criminal Law' },
    { id: 'mod2', name: 'Constitutional Law' },
    { id: 'mod3', name: 'Business Law' },
  ];

  intakes = [
    { id: 'int1', name: 'January 2025' },
    { id: 'int2', name: 'May 2025' },
    { id: 'int3', name: 'September 2025' },
  ];

  constructor(private fb: FormBuilder) {
    this.stepOne = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      activityType: ['', Validators.required],
    });

    this.stepTwo = this.fb.group({
      startDay: ['', Validators.required],
      endDay: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });

    this.stepThree = this.fb.group({
      moduleId: ['', Validators.required],
      intakeId: ['', Validators.required],
      trainerId: ['', Validators.required],
      roomId: ['', Validators.required],
      componentId: ['', Validators.required],
    });

    this.stepFour = this.fb.group({
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    const data = {
      ...this.stepOne.value,
      ...this.stepTwo.value,
      ...this.stepThree.value,
      ...this.stepFour.value,
    };
    console.log('Submitting form:', data);
    alert('Form submitted! (Check console)');
  }
}
