import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: any[] = [];
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
}
