import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRestaurantPageRoutingModule } from './update-restaurant-routing.module';

import { UpdateRestaurantPage } from './update-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRestaurantPageRoutingModule
  ],
  declarations: [UpdateRestaurantPage]
})
export class UpdateRestaurantPageModule {}
