import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesFunctionsRoutingModule } from './pipes-functions-routing.module';
import { PipesFunctionsComponent } from './pipes-functions.component';
import { AddTaxModule } from 'src/app/shared/pipes/add-tax/add-tax.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PipesFunctionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesFunctionsRoutingModule,
    AddTaxModule,
  ],
})
export class PipesFunctionsModule {}
