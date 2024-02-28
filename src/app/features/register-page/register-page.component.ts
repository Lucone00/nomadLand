import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  registrationForm!: FormGroup;
  currentStep = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      lastTrip: ['', Validators.required],
    });
  }

  nextStep() {
    this.currentStep++;
  }

  onSubmit() {
    console.log('Dati inviati:', this.registrationForm.value);
  }
}
