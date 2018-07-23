import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;

  registerCredentials = { 
    usuario: '', 
    password: '' 
  };

  constructor(
    public nav: NavController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }

  public login() {

    this.showLoading()

    if (this.registerCredentials.usuario == "" || this.registerCredentials.password == "") {
      this.showError("Favor informar usuário e senha.");

    } else {

      this.auth.login(this.registerCredentials).subscribe(
        allowed => {
          if (allowed) {
            console.log("Entrou: " + allowed);

            //this.nav.setRoot(TabsPage);
            this.navCtrl.push(TabsPage);
            console.log(this.auth.token);
    
          } else {
            console.log("Entrou: " + allowed);
            
            this.showError("Usuário ou senha inválidos.");
            console.log(this.auth.token);
          }
        },
        error => {
          this.showError(error);
        }
      );
      
    }

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
