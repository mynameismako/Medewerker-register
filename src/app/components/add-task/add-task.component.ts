import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  firstname: string;
  lastname: string;
  gender: string;
  adres: string;
  district: string;
  phone: string;
  email: string;
  reminder: boolean = true;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.firstname) {
      alert('Vul voornaam in!');
      return;

    }if (!this.lastname) {
      alert('Vul achternaam in!');
      return;

    }if (!this.gender) {
      alert('Vul geslacht in!');
      return;

    }if (!this.adres) {
      alert('Vul adres in!');
      return;

    }if (!this.district) {
      alert('Vul district in!');
      return;

    }if (!this.phone) {
      alert('Vul telefoonnumer in!');
      return;

    }if (!this.email) {
      alert('Vul email in!');
      return;
    }    

    const newTask: Task = {
      firstname: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      adres: this.adres,
      district: this.district,
      phone: this.phone,
      email: this.email,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.firstname = '';
    this.lastname = '';
    this.gender = '';
    this.district = '';
    this.phone = '';
    this.email = '';
    this.reminder = true;
  }
}
