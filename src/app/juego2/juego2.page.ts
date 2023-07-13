import { Component, OnInit } from '@angular/core';
import { type } from 'os';

type word = {
  original:string;
  scrambled: string;
  hint : string;
};

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.page.html',
  styleUrls: ['./juego2.page.scss'],

})
export class Juego2Page implements OnInit {

  word: word = { original: '', scrambled: '', hint: '' };
  hint: string = '';
  letters: string[] = [];
  inputColors: string[] = [];
  wrongLetters: string = '';
  guessesLeft: number = 0;
  guess: string = '';
  hiddenLetters: string[] = [];
  hintVisible: boolean = false;
  
  constructor() {
    this.reset();
  }
  
  reset() {
    const generatedWord = this.generateWord();
    this.word = {
      original: generatedWord.original,
      scrambled: generatedWord.scrambled,
      hint: this.generateHint(),
    };
    this.letters = this.word.original.split('');
    this.hiddenLetters = Array(this.word.original.length).fill(' ');
    this.inputColors = Array(this.word.original.length).fill('light');
    this.wrongLetters = '';
    this.hint = '';
    this.guessesLeft = 6;
    this.guess = '';
    this.hintVisible = false;
  }
  generateWord(): { original: string; scrambled: string } {
    const word: string[] = [
      'monografia',
      'cogrado',
      'investigacion-creacion',
      'internacional',
      'seminarios',
      'innovacion',
      'cuarenta',
      'ensayo',
    ];
    const randomIndex: number = Math.floor(Math.random() * word.length);
    const originalWord = word[randomIndex];
    const scrambledWord = originalWord
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
    return { original: originalWord, scrambled: scrambledWord };
  }

  generateHint(): string {
    const hint: string[] = [
      'Fomenta la investigación académica',
      'Título obtenido al finalizar una carrera universitaria',
      'Proceso creativo en el que se realiza investigación',
      'Relativo a varias naciones',
      'Sesiones de formación',
      'Introducción de novedades',
      'Cantidad numérica',
      'Trabajo escrito que se desarrolla a partir de un tema específico',
    ];
    const randomIndex: number = Math.floor(Math.random() * hint.length);
  const selectedHint = hint[randomIndex];
  return selectedHint;
  }
  
 
  
  checkGuess(): void {
    const guessedLetter = this.guess.toLowerCase();
    let found = false;
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === guessedLetter) {
        found = true;
        this.inputColors[i] = 'dark';
        this.hiddenLetters[i] = this.word.original[i];
      }
    }
  
    // Actualizar los detalles del juego
    if (found) {
      if (this.inputColors.indexOf('light') === -1) {
        // Adivinaste todas las letras
        this.showAlert('¡Ganaste!', 'Has adivinado la palabra.');
      }
    } else {
      // Letra incorrecta
      this.guessesLeft--;
      this.wrongLetters += guessedLetter;
      if (this.guessesLeft === 0) {
        // Sin intentos restantes
        this.showAlert('¡Perdiste!', `La palabra era "${this.word.original}".`);
      }
    }
  
    // Borrar el campo de entrada
    this.guess = '';
    this.checkGameStatus();
  }
  
  showAlert(title: string, message: string): void {
    const alert = document.createElement('ion-alert');
    alert.header = title;
    alert.message = message;
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    alert.present().then(() => {
      this.reset();
    });
  }

  checkGameStatus(): void {
    if (this.inputColors.every(color => color === 'success')) {
      this.showAlert('¡Ganaste!', 'Has adivinado la palabra.');
    } else if (this.guessesLeft === 0) {
      this.showAlert('¡Perdiste!', 'No has adivinado la palabra.');
    }
  }
  ngOnInit(): void {
    
  }
}
  
