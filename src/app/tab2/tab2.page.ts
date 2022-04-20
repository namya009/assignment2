import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  str: string;
  data: any[] = [];
  constructor(private db: StorageService,private toast: ToastController) {
  }
  searchItem(){
    this.db.getRestaurantsByNameOrTag(this.str).then(res => {
      if(res instanceof Object){
        this.presentToast('d');
        this.presentToast(res.rest_name);

      }else{
        this.presentToast(res[0].toString());
        this.presentToast("res[0].rest_name");

      }
    }, err=>{
      this.presentToast('e');
    });
  }
  async presentToast(str) {
    let toast = await this.toast.create({
      message: str,
      duration: 3000,
    });
    toast.present();
   }
}
