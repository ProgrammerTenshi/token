import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Auth,signOut } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mostrarBoton1: boolean = true;
  intercambiarBotonesIn(): void {
    this.mostrarBoton1 = !this.mostrarBoton1;
    this.router.navigate(['/login'])
  }
  intercambiarBotonesOut(): void {
    this.mostrarBoton1 = !this.mostrarBoton1;
    this.userService.logout()
    .then(response=>{
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error=>console.log(error))
  }
constructor(@Inject(DOCUMENT) public document: Document, private userService:UserService, private router:Router, private auth:Auth){

}
ngOnInit(): void {
        
}

onClick(){
  this.userService.logout()
  .then(()=>{
    this.router.navigate(['/login']);
  })
  .catch(error=>console.log(error));
}
onSubmit(email:string, password:string){
  this.userService.register(email, password)
  .then(response=>{
    console.log(response);
    this.router.navigate(['/login']);
  })
  .catch(error=>console.log(error));
  }
 
// login(){
//   this.router.navigate(['/login'])
// }
// logout(){
//   return signOut(this.auth);
// }
// onLogout(){
//   this.userService.logout()
//   .then(response=>{
//     console.log(response);
//     this.router.navigate(['/home']);
//   })
//   .catch(error=>console.log(error))
// }

}
