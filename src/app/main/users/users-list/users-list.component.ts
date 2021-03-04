import { BrowserLoggerService } from './../../../core/services/browser-logger.service';
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
})
export class UsersListComponent implements OnInit, OnChanges {
  @Input() users: User[] = [];
  @Output() onSelect = new EventEmitter<any>();
  logMessages = [];

  constructor(private logger: BrowserLoggerService) {}
  ngOnChanges() {
    this.logger.log('change detected');
  }
  ngOnInit(): void {}
  showUserDetails(user) {
    this.onSelect.emit(user);
  }
}
