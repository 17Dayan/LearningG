import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.user$ = this.afAuth.authState;
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const credential = await this.afAuth.signInWithPopup(provider);
      return credential;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  

  async signOut() {
    await this.afAuth.signOut();
  }

}

