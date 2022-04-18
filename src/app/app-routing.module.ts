import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-restaurant',
    loadChildren: () => import('./add-restaurant/add-restaurant.module').then( m => m.AddRestaurantPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'update-restaurant/id',
    loadChildren: () => import('./update-restaurant/update-restaurant.module').then( m => m.UpdateRestaurantPageModule)
  },
  {
    path: 'detail-restaurant/id',
    loadChildren: () => import('./detail-restaurant/detail-restaurant.module').then( m => m.DetailRestaurantPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
