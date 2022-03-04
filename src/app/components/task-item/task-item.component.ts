import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  tasks: Task[] = [];
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faPen = faPen;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onEdit(task) {
    this.onEditTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
