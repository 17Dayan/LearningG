import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  formularioRegistro!: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  registrarUsuario(){
    console.log(this.formularioRegistro.value);

    localStorage.setItem('usuario', JSON.stringify(this.formularioRegistro.value));
  }

}
