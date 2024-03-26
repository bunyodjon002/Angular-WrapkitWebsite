import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { Jwt2Service } from './jwt2.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  private Logeedin2=false;

Logins(names:string,passwords:string):boolean{
if(this.jwt){
  this.Logeedin2=true;
  return true;
}
else {
  return false;
}
}
isLoggedin1():boolean{
  return this.Logeedin2
}
isAdmins():boolean{
  return this.Logeedin2;
}
saveToken(jwt:string){
  localStorage.setItem('auth_token',jwt)
}
logouts():void{
  this.Logeedin2=false;
}
  constructor(private jwt:Jwt2Service) { }
}
