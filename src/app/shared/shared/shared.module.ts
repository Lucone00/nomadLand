import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FloatingMenuComponent } from '../components/floating-menu/floating-menu/floating-menu.component';


@NgModule({
  declarations: [NavbarComponent, FloatingMenuComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    BsDropdownModule,
    FloatingMenuComponent
  ],
})
export class SharedModule {}
