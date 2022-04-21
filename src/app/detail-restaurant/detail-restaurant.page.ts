import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {
  id: any;
  name: string;
  add: string;
  postal: string;
  city: string;
  phone: string;
  desc: string;
  rate: number;
  constructor(
    private db: StorageService,
    private actRoute: ActivatedRoute,
    private toast: ToastController,
    public navCtr: NavController
  ) {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.db.getRestaurantById(this.id).then(res => {
      this.name=res.rest_name;
      this.add=res.rest_address;
      this.postal=res.rest_postal;
      this.city=res.rest_city;
      this.phone=res.rest_phone;
      this.desc=res.rest_description;
      this.rate=res.rest_rating;
    }, err=>{
      this.presentToast(err);
    });
   }

  ngOnInit() {
  }
  async presentToast(str) {
    let toast = await this.toast.create({
      message: str,
      duration: 3000,
    });
    toast.present();
   }
   deleteRestaurant(id) {
    this.db.deleteRestaurant(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Restaurant Deleted',
        duration: 3000,
      });
      toast.present();
      this.navCtr.navigateRoot('tabs/tab3');
    });

  }
}
