import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the VeiculosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VeiculosProvider {

  public token: string;
  private API_URL = 'http://painel.nuvvel.com.br/nvl-1.0/vehicles';

  private headers: any;
  private options: any;

  constructor(public http: Http) {
    console.log('Hello VeiculosProvider Provider');
  }


  getVeiculos(token_teste: string) {
    this.token = token_teste;

    console.log("Token: " + this.token);
    
    this.headers = new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.token });
    this.options = new RequestOptions({ headers: this.headers });
    
    
    return this.http.get(this.API_URL, this.options);
  }

}
