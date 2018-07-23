import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {

    titulo: "Ricardo Junior",
    data: "November 5, 1955",
    descricao: "Estou criando Ricardo App",
    quant_likes: 12,
    quant_comentarios: 5,
    time_comentario: "11h ago"

  }

  public nome_usuario: String = "Ricardo Carlos";

  public token: string;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private movieProvider: MoovieProvider,
      private auth: AuthServiceProvider) {
  }

  somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
  
     this.movieProvider.getUltimosFilmes().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      }
    )
    
    
    // this.usersProvider.login("ricardo@nuvvel.com.br","carlos123").subscribe(
    //   data => {
    //     const response = (data as any);
    //     const objeto_retorno = JSON.parse(response._body);

    //     console.log(objeto_retorno);

    //     this.token = objeto_retorno.usuario.api_token;
    //   },
    //   error => {
    //     console.log(error);
    // });


  }


  public logout() {
    this.auth.logout().subscribe(succ => {
      //this.nav.setRoot(LoginPage);
    });
  }

}
