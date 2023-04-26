import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;

  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Modalidades', url: 'modalidad', icon: 'list' },
    { title: 'Juego', url: 'juego', icon: 'play' },
    { title: 'Juego2', url: 'juego2', icon: 'play' },
    { title: 'Instrucciones', url: 'instruccion', icon: 'person' },
    { title: 'Login', url: 'login', icon: 'log-in' },
   
  ];
  
}
