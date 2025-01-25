import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  isSignUp: boolean = false;
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleForm(): void {
    this.isSignUp = !this.isSignUp;
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      const username = this.signInForm.value.email;
      const role = username.includes('admin') ? 'Admin' : 'User'; 
      this.authService.login(username, role);
      alert('Sign-In Successful!');
      this.router.navigate(['/']);
    }
  }

  onSignUp(): void {
    if (this.signUpForm.valid) {
      if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Sign-Up Successful!');
      this.isSignUp = false;
    }
  }
}
