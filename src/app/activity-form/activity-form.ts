import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activity-form.html',
  styleUrls: ['./activity-form.css']
})
export class ActivityForm {
  formData = {
    title: '',
    description: '',
    activityType: '',
    intakeId: '',
    roomId: '',
    componentId: '',
    moduleId: '',
    startDay: '',
    endDay: '',
    startTime: { hour: 0, minute: 0, second: 0, nano: 0 },
    endTime: { hour: 0, minute: 0, second: 0, nano: 0 },
    activityLevelResponses: [{ id: '', level: '', levelRefId: '' }]
  };

  submitForm() {
    console.log('Submitted data:', this.formData);
    alert('Activity Submitted!');
  }
}
