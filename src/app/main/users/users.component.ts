import { ClonerService } from './../../core/services/cloner.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models';
import { expandCollapse } from 'src/app/animations';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  animations: [expandCollapse],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  user: User;
  selectedUser: User;

  isLoading: boolean = true;
  constructor(private userService: UserService, private clone: ClonerService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      if (users[0]) {
        //without clone
        this.user = users[0];
        //with clone
        // this.user = this.clone.deepClone(users[0]);
      }
      this.isLoading = false;
    });
  }
  changed(event) {
    let index = this.users.findIndex((user) => user.id == event.id);
    this.users[index] = this.clone.deepClone(event);
  }
  showUserDetails(user) {
    this.user = user;
  }
}
