import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaxPipe } from './add-tax.pipe';

@NgModule({
  declarations: [AddTaxPipe],
  imports: [CommonModule],
  exports: [AddTaxPipe],
})
export class AddTaxModule {}
