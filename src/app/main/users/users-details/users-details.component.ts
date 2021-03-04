import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from 'src/app/core/models';

@Component({
  selector: 'users-details',
  templateUrl: './users-details.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDetailsComponent implements OnInit {
  @Input() set user(value: User) {
    this._user = value;
  }
  @Output() userChanged = new EventEmitter<any>();
  //Private
  private _user: User;
  constructor() {} 

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('change detected');
    // if (changes['user']) {
    //   //ddd
    // }
  }

  change() {
    this.userChanged.emit(this.user);
  }

  //getters
  get user(): User {
    return this._user;
  }
}
