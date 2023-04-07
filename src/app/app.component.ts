import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Modalidades', url: 'modalidad', icon: 'list' },
    { title: 'Juego', url: 'juego', icon: 'play' },
    { title: 'Instrucciones', url: 'instruccion', icon: 'person' },
    { title: 'Login', url: 'login', icon: 'log-in' },
   
  ];
  
}
