import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { User } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  googleSignIn() {
    this.authService.googleSignIn()
      .then(() => {
        this.router.navigate(['/modalidad']);
      })
      .catch((error) => {
        console.log(error);
        this.errorMessage = error.message;
      });
  }
  

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
  
    if (this.loginForm.valid && this.loginForm.value.email === email && this.loginForm.value.password === password) {
      console.log('Ingreso exitoso');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', this.loginForm.value.email); // guardar el email en localStorage
      this.router.navigate(['/modalidad']);
    } else {
      alert('Correo o contraseña incorrecta');
    }
  }
  
  
  logout() {
    localStorage.removeItem('isLoggedIn'); // Eliminar la clave "isLoggedIn" del local storage
    this.router.navigate(['/login']); // Redirigir al usuario a la página de login
  }
  
}
