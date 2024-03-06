import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  registrationForm!: FormGroup;
  currentStep = 1;
  isNextButtonDisabled = false;
  isCurrentFieldValid = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern(/^.{3,14}$/)]],
      lastTrip: ['', Validators.required],
    });

    this.updateButtonState();

    this.registrationForm.valueChanges.subscribe(() => {
      this.updateButtonState();
    });
  }

  updateButtonState() {
    const currentField = this.getFieldByStep(this.currentStep);
    this.isCurrentFieldValid = currentField ? currentField.valid : false;
    this.isNextButtonDisabled =
      this.registrationForm.invalid || this.registrationForm.pending;
  }

  getFieldByStep(step: number) {
    switch (step) {
      case 1:
        return this.registrationForm.get('email');
      case 2:
        return this.registrationForm.get('username');
      case 3:
        return this.registrationForm.get('lastTrip');
      default:
        return null;
    }
  }

  nextStep() {
    this.currentStep++;
    this.updateButtonState();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    console.log('Dati inviati:', this.registrationForm.value);
  }
}
