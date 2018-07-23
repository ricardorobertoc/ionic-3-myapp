import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { VeiculosProvider } from '../../providers/veiculos/veiculos';

/**
 * Generated class for the VeiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veiculos',
  templateUrl: 'veiculos.html',
})
export class VeiculosPage {

  public lista_veiculos: Array<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthServiceProvider,
    private veiculosProvider: VeiculosProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VeiculosPage');
    this.getVeiculos(this.auth.token);
  }

  getVeiculos(token: string){

    this.veiculosProvider.getVeiculos(token).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body); 
        this.lista_veiculos = objeto_retorno.devices;
        console.log(this.lista_veiculos[0]);
      },
      error => {
        console.log(error);
    });

  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      //this.nav.setRoot(LoginPage);
    });
  }

}
