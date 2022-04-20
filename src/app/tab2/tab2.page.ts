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
  filteredData: any[] = [];
  constructor(private db: StorageService,private toast: ToastController) {
  }
  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchRestaurant().subscribe((item) => {
          this.data = item;
        });
      }
    });
  }
  searchItem(){
    this.filteredData = this.data.filter((item)=>{
      return item.rest_name.toLowerCase().indexOf(this.str.toLowerCase()) > -1;
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
