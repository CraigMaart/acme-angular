import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(user => {
        if (user) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.router.navigate(['/landing']);
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }

}
