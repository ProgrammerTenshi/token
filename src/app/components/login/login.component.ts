import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
formLogin:FormGroup;
constructor(private userService:UserService, private router:Router){
  this.formLogin=new FormGroup({
    email: new FormControl(),
    password: new FormControl()
})
}
ngOnInit(): void {
    
}
onSubmit(email:string, password:string){
  this.userService.login(email, password)
  .then(response=>{
    console.log(response);
  })
  .catch(error=>console.log(error));
  
}

onClick(){
  this.userService.loginWithGoogle()
  .then(response=>{
    console.log(response);
    this.router.navigate(['/home']);
  })
  .catch(error=>console.log(error))
}
register(){
  this.router.navigate(['/home'])
}

}
