import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRestaurantPage } from './update-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRestaurantPageRoutingModule {}
