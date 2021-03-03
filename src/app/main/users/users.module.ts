import { UsersComponent } from './users.component';
import { LoadingSpinneModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, LoadingSpinneModule],
})
export class UsersModule {}
