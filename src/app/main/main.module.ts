import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [MainComponent, NavbarComponent],
  imports: [CommonModule, MainRoutingModule],
})

export class MainModule {}
