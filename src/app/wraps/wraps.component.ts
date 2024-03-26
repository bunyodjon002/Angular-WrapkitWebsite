import { Component } from '@angular/core';import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthencationService } from '../authencation.service';
import { Router } from '@angular/router';
import { Auth2Service } from '../auth2.service';

@Component({
  selector: 'app-wraps',
  templateUrl: './wraps.component.html',
  styleUrls: ['./wraps.component.scss']
})
export class WrapsComponent {
  name:string='';
  surname:string='';
  email:string='';
  password:string='';
constructor(public auth:AuthencationService , public router:Router , public auth2:Auth2Service){}
onSubmit():void{
  if(this.name,this.email,this.password,this.surname){
    if(this.auth.Usersapilogin(this.name,this.email,this.password,this.surname)){
      console.log("User Tizimiga kirdi!");
      
    }
    else{
      console.log("xatolik");
      
    }
  }
}
logout(){
  this.auth.logout();
  console.log("chiqib ketdi");
  
}
logedin(){
  this.auth.isLoggedin()
  console.log("loged in");
  
}
names:string='';
passwords:string='';
onSubmits():void{
  if(this.names,this.passwords){
    if(this.auth2.Logins(this.names,this.passwords)){
      console.log("User Tizimiga kirdi!");
      
    }
    else{
      console.log("xatolik");
      
    }
  }
}
logedins(){
  this.auth2.isLoggedin1();
  console.log("loged in");
  
}
}
