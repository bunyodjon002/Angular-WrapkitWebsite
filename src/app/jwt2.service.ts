import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Jwt2Service {
  private usersapi1 = [{id:2,  name:"Bunyod", password:"bunyod002",  token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}]
   ///new Api
   usersLogin(name:string,password:string):Observable<any>{
    const users=this.usersapi1.find(u=> u.name === name && u.password===password);
    if(users){
      return of({succes:true,token:users.token}).pipe(delay(1000))
    }
    else {
      return of ({succes:false}).pipe(delay(1000))
    }
      }
      register(name:string,password:string):Observable<any>{
    return of({succes:true}).pipe(delay(1000));
      }
  
  constructor() { }
}
