import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtr : NavController) {}

  addRestbtn(){
      this.navCtr.navigateForward('add-restaurant')
  }
  updateRestbtn(){
    this.navCtr.navigateForward('tab3')
  }
  deleteRestbtn(){
    this.navCtr.navigateForward('tab3')
  }

}
