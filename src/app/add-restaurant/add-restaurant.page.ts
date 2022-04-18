import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = [];

  backbtn() {
    this.navCtr.navigateBack('/');
  }

  constructor(
    public navCtr: NavController,
    private db: StorageService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchRestaurant().subscribe((item) => {
          this.Data = item;
        });
      }
    });
    this.mainForm = this.formBuilder.group({
      rest_name: [''],
      rest_address: [''],
      rest_postal: [''],
      rest_city: [''],
      rest_description: [''],
      rest_phone: [''],
      rest_rating: [''],
    });
  }

  storeData() {
    this.db
      .addRestaurant(
        this.mainForm.value.rest_name,
        this.mainForm.value.rest_address,
        this.mainForm.value.rest_postal,
        this.mainForm.value.rest_city,
        this.mainForm.value.rest_description,
        this.mainForm.value.rest_phone,
        this.mainForm.value.rest_rating
      )
      .then((res) => {
        this.mainForm.reset();
        this.navCtr.navigateForward('tab3');
      });
  }
}
