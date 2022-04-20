import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  names : string [] = ['Namya Patel - 101281322' , 'Pruthvi Soni - 101276714' , 'Sahay Patel - 101283555' , 'Vishwa Mavani - 101285743']

  backbtn() {
    this.navCtr.navigateBack('/');
  }

  constructor( public navCtr: NavController) { }

  ngOnInit() {
  }

}
