import { Injectable } from '@angular/core';
import { Auth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticated: boolean = false;
  constructor(private auth:Auth) { }
/////////////////
logIn(): void {
  // Implementa aquí la lógica para iniciar sesión
  this.isAuthenticated = true;
}

logOut(): void {
  // Implementa aquí la lógica para cerrar sesión
  this.isAuthenticated = false;
}

getIsAuthenticated(): boolean {
  return this.isAuthenticated;
}
  //////////////
  register(email:string, password: string){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
  login(email:string, password: string){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  loginWithGoogle(){
return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }
}
