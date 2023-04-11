import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email!: string;
  password!: string;
  errormesage!: string;

  constructor(private router: Router) { 
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  
  }

  login() {
    console.log('email:', this.email);
    console.log('password:', this.password);
  
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password') || ''; // Inicializar a un string vacío si no existe en localStorage
    
    localStorage.setItem('email', 'camila@unipaz.edu.co');
    localStorage.setItem('password', '12345camila');
    
    if (this.email && this.email.trim() === email && this.password && this.password.trim() === password) {
      console.log('Ingreso exitoso');
      this.router.navigate(['/modalidad']);
    } else {
      alert('Correo o contraseña incorrecta');
    }
  }
  

}

