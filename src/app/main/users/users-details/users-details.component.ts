import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { User } from 'src/app/core/models';

@Component({
  selector: 'users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  @Input() user: User;
  @Output() userChanged = new EventEmitter<any>();
  logMessages = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      const cust = changes['user'].currentValue as User;
      this.logMessages.push({ title: 'user changed', value: cust });
    }
  }

  change() {
    this.userChanged.emit(this.user);
  }
}
