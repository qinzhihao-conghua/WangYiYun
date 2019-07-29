import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomRoutingModule } from './bottom-routing.module';
import { BottomComponent } from './bottom.component';

@NgModule({
  declarations: [BottomComponent],
  exports: [BottomComponent],
  imports: [
    CommonModule,
    BottomRoutingModule
  ]
})
export class BottomModule { }
