import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
