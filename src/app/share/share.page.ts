import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor(public navCtr: NavController) { }

  backbtn() {
    this.navCtr.navigateBack('/');
  }

  ngOnInit() {
  }

}
