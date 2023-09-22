import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDate=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  singUp(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }
  login(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
  }
  decodeUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodesToken:any=jwtDecode(encodedToken);
    this.userDate.next(decodesToken);

  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userDate.next(null);
    this._Router.navigate(['/login'])

  }
}
