import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [CommonModule, SharedModule],
  exports: [WelcomePageComponent]
})
export class WelcomePageModule {}
