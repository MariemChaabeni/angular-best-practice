import { User } from 'src/app/core/models';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnChanges {
  @Input() users: User[] = [];
  @Output() onSelect = new EventEmitter<any>();
  logMessages = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      const custs = changes['users'].currentValue;
      this.logMessages.push({ title: 'users changed', value: custs });
    }
  }
  ngOnInit(): void {}
  showUserDetails(user) {
    this.onSelect.emit(user);
  }
}
