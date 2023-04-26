import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.page.html',
  styleUrls: ['./juego2.page.scss'],
})
export class Juego2Page implements OnInit {

  word!: string;
  hint!: string;
  letters: string[] = [];
  inputColors: string[] = [];
  wrongLetters: string = '';
  guessesLeft!: number;
  guess!: string;
  hiddenLetters: string[] = [];
  
  constructor() {
    this.reset();
  }
  
  reset() {
    this.word = this.generateWord();
    this.hint = this.generateHint();
    this.letters = this.word.split('');
    this.hiddenLetters = Array(this.word.length).fill(' ');
    this.inputColors = Array(this.word.length).fill('light');
    this.wrongLetters = '';
    this.guessesLeft = 6;
    this.guess = '';
  }
  
  generateWord(): string {
    const words: string[] = ['apple', 'banana', 'cherry', 'grape', 'lemon', 'orange', 'peach', 'pear', 'pineapple', 'strawberry'];
    const randomIndex: number = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  generateHint(): string {
    const hints: string[] = ['A popular fruit', 'Yellow and curved', 'A small red fruit', 'A small sweet fruit', 'Sour and citrusy', 'A citrus fruit', 'A juicy fruit', 'A pear-shaped fruit', 'A tropical fruit', 'A red, juicy fruit'];
    const randomIndex: number = Math.floor(Math.random() * hints.length);
    return hints[randomIndex];
  }
  
  checkGuess(): void {
    const guessedLetter = this.guess.toLowerCase();
    let found = false;
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === guessedLetter) {
        found = true;
        this.inputColors[i] = 'dark';
        this.hiddenLetters[i] = this.letters[i];
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
        this.showAlert('¡Perdiste!', `La palabra era "${this.word}".`);
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
  
