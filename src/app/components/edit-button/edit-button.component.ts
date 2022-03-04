import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
    
    alert:boolean = false;
    reminder:boolean = true;
    getTaskInput = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    gender: new FormControl(''),
    adres: new FormControl(''),
    district: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private task: TaskService, private router: ActivatedRoute) { }
  
  ngOnInit(): void {

  console.log(this.router.snapshot.params.id)
  this.task.getTask(this.router.snapshot.params.id).subscribe((result) => {
    this.getTaskInput = new FormGroup({
      firstname: new FormControl(result['firstname']),
      lastname: new FormControl(result['lastname']),
      gender: new FormControl(result['gender']),
      adres: new FormControl(result['adres']),
      district: new FormControl(result['district']),
      phone: new FormControl(result['phone']),
      email: new FormControl(result['email'])
    })
  })
  }

  updateTask(){
    this.task.updateTask(this.router.snapshot.params.id, 
    this.getTaskInput.value).subscribe(
    (result) => this.alert=true
    ) 
  }
  closeAlert(){
    this.alert = false;
  }
}


