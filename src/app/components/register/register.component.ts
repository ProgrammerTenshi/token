import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  formReg:FormGroup;
constructor(private router:Router, private userService:UserService){
  this.formReg=new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
}
ngOnInit(): void {
}
onSubmit(email:string, password:string){
this.userService.register(email, password)
.then(response=>{
  console.log(response);
  this.router.navigate(['/login']);
})
.catch(error=>console.log(error));
}

login(){
  this.router.navigate(['/home'])
}

}
