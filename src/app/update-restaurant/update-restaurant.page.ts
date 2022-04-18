import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.page.html',
  styleUrls: ['./update-restaurant.page.scss'],
})
export class UpdateRestaurantPage implements OnInit {
  editForm: FormGroup;
  id: any;
  constructor(
    public navCtr: NavController,
    private db: StorageService,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private toast: ToastController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.db.getRestaurantById(this.id).then(res => {
      this.editForm.setValue({
        rest_name: res['rest_name'],
        rest_address: res.rest_address,
        rest_postal: res['rest_postal'],
        rest_city: res['rest_city'],
        rest_description: res['rest_description'],
        rest_phone: res['rest_phone'],
        rest_rating: res['rest_rating'],
      });
    }, err=>{
      this.presentToast(err);
    });

   }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      rest_name: [''],
      rest_address: [''],
      rest_postal: [''],
      rest_city: [''],
      rest_description: [''],
      rest_phone: [''],
      rest_rating: [''],
    });
  }
  saveForm(){
    this.db.updateRestaurant(this.id, this.editForm.value)
    .then( (res) => {
      console.log(res);
      this.presentToast('Restaurant updated');
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
