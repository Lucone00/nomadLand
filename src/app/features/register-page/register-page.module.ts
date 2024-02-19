import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [RegisterPageComponent],
})
export class RegisterPageModule {}
