import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
  //static readonly REGISTER_URL = 'http://contoh.dev/api/register';

  static readonly LOGIN_URL = 'http://painel.nuvvel.com.br/nvl-1.0/login';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  access: boolean;
  token: string;

  constructor(public http: Http) {}

  // Login
  public login(credentials) {

    return Observable.create(observer => {

      this.http.post(AuthServiceProvider.LOGIN_URL, credentials, this.options)
      .map(res => res.json())
      .subscribe( data => {
        
        if (data.success) {
          this.token = data.usuario.api_token;
          this.access = true;
        } else {
          this.access = false;
        }
      });

      setTimeout(() => {
            observer.next(this.access);
        }, 1000);

      setTimeout(() => {
            observer.complete();
        }, 2000);


    }, err => console.error(err));
  }

  // Get Token
  // public getToken() {
  //   return this.token;
  // }

  // Logout
  public logout() {
    return Observable.create(observer => {
      
      observer.next(true);
      observer.complete();


      window.location.reload();
      console.log("saiu");
    });
  
  }

}
