import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../app.module'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  async login({ email, password }: { email: string, password: string }) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error: any) {
      console.error('Login error:', error.message);
      return null;
    }
  }

  async register({ email, password }: { email: string, password: string }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error: any) {
      console.error('Register error:', error.message);
      return null;
    }
  }

  logout() {
    return signOut(auth);
  }
}