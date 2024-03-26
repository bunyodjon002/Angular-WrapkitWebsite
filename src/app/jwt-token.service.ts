import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  private usersapi = [{ id: 1, surname: "Mirxalilov", email: "bunyod02@gmail.com", password: "bunyod1212", name: "Bunyod", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCdW55b2QiLCJuYW1lIjoiTWlyeGFsaWxvdiIsImlhdCI6MTIwMjAwMjEyMTN9._FpzdLazPeGAwD9V6zE_edqV5N2VWzVcyj4oB43v4Z8" }]
  
  usersapiLogin(surname: string, email: string, password: string, name: string): Observable<any> {
    const usersapis = this.usersapi.find(u => u.email === email && u.password === password && u.name === name && u.surname === surname)
    if (usersapis) {
      return of({ succes: true, token: usersapis.token }).pipe(delay(1000));
    }
    else {
      return of({ secces: false }).pipe(delay(1000));
    }
  }
  registeruser(surname: string, email: string, password: string, name: string): Observable<any> {
    return of({ sucess: true }).pipe(delay(1000));
  }
 
  
  constructor() { }
}
