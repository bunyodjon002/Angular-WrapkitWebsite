import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthencationService {
private Loggedin=false;

Usersapilogin(surname: string, email: string, password: string, name: string):boolean{
if(this.jwt){
  this.Loggedin=true;
 
  return true;
}
else {
  return false;
}

}
saveToken(jwt:string){
  localStorage.setItem('auth_token',jwt)
}

logout():void{
  this.Loggedin=false;
}

isLoggedin():boolean{
  return this.Loggedin
}

isAdmin():boolean{
  return this.Loggedin;
}
  constructor(private jwt:JwtTokenService) { }
}
