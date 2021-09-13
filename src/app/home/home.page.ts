/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulaApiService,  } from '../services/formula-api.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
//import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // footer: AnimationOptions = {
  //   path:'assets/animation.json'
  // };

  public dataDriver = null ;
  public dataSeason = null ;

  public results: Observable<any[]>;

  public season: any;
  public round: any;


  constructor(public formulaApiService: FormulaApiService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }



  async search() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading data..',
    });
    await loading.present();

    this.results = this.formulaApiService.getSeason(this.season, this.round);

    this.results.subscribe(async result => {
          await loading.dismiss();
          console.log('Season & Round details',result);
          this.dataSeason = result['Races'];
        },
          async err => {
          console.log(err);
          await loading.dismiss();
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: err.message,
            buttons: ['OK']
          });
          await alert.present();
        });
      }

    async drivers() {
      const loading = await this.loadingCtrl.create({
        message: 'Loading data..',
      });
      await loading.present();

      this.results = this.formulaApiService.getDrivers();

      this.results.subscribe(async (result: any[]) => {
            await loading.dismiss();
            console.log('Driver details',result);
            this.dataDriver = result['Drivers'];
          },
            async err => {
            console.log(err);
            await loading.dismiss();
            const alert = await this.alertCtrl.create({
              header: 'Error',
              message: err.message,
              buttons: ['OK']
            });
            await alert.present();
          });
        }

}
