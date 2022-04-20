import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { IonItemSliding, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddRestaurantPage } from '../add-restaurant/add-restaurant.page';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: SQLiteObject;
  restaurantList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ) {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'restaurant.db',
          location: 'default',
        })

        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeDate();
        }); // this.init()
    });
  }

  //  init(){
  //    return this.sqlite.create(
  //      {
  //       name:'restaurant.db',
  //       location: 'default'
  //      }
  //    ).then((db : SQLiteObject) =>{
  //      this.storage = db;
  //      this.storage.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='rtable'; ", [])
  //      .then(res=>{
  //       if(res.rows.length > 0){
  //       this.getRestaurants();
  //       this.isDbReady.next(true);
  //       }else{
  //       this.getFakeDate();
  //       }
  //       })
  //       .catch(err=>{
  //       this.getFakeDate();
  //       })
  //       });
  //       }

  getFakeDate() {
    this.httpClient
      .get('assets/data.sql', { responseType: 'text' })
      .subscribe((data) => {
        this.sqlPorter
          .importSqlToDb(this.storage, data)
          .then((_) => {
            this.getRestaurants();
            this.isDbReady.next(true);
          })
          .catch((error) => console.error(error));
      });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchRestaurant(): Observable<Restaurant[]> {
    return this.restaurantList.asObservable();
  }
  fetchRestaurantByNameOrTag(str): Observable<Restaurant[]> {
    return this.restaurantList.asObservable();
  }

  getRestaurants() {
    return this.storage.executeSql('SELECT * FROM rtable', []).then((res) => {
      const items: Restaurant[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            rest_name: res.rows.item(i).rest_name,
            rest_address: res.rows.item(i).rest_address,
            rest_postal: res.rows.item(i).rest_postal,
            rest_city: res.rows.item(i).rest_city,
            rest_description: res.rows.item(i).rest_description,
            rest_phone: res.rows.item(i).rest_phone,
            rest_rating: res.rows.item(i).rest_rating,
          });
        }
      }
      this.restaurantList.next(items);
    });
  }
  //add
  addRestaurant(
    rest_name,
    rest_address,
    rest_postal,
    rest_city,
    rest_description,
    rest_phone,
    rest_rating
  ) {
    let data = [
      rest_name,
      rest_address,
      rest_postal,
      rest_city,
      rest_description,
      rest_phone,
      rest_rating,
  ];
    return this.storage
      .executeSql(
        'INSERT INTO rtable(rest_name, rest_address, rest_postal, rest_city, rest_description, rest_phone, rest_rating) VALUES(?,?,?,?,?,?,?)',
        data
      )
      .then((res) => {
        this.getRestaurants();
      });
  }
  //get

  getRestaurantById(id): Promise<Restaurant> {
    return this.storage
      .executeSql('SELECT * FROM rtable WHERE id = ?', [id])
      .then((res) => ({
        id: res.rows.item(0).id,
        rest_name: res.rows.item(0).rest_name,
        rest_address: res.rows.item(0).rest_address,
        rest_postal: res.rows.item(0).rest_postal,
        rest_city: res.rows.item(0).rest_city,
        rest_description: res.rows.item(0).rest_description,
        rest_phone: res.rows.item(0).rest_phone,
        rest_rating: res.rows.item(0).rest_rating,
      }));
  }
  //update
  updateRestaurant(id, restaurant: Restaurant) {
    let data = [
      restaurant.rest_name,
      restaurant.rest_address,
      restaurant.rest_postal,
      restaurant.rest_city,
      restaurant.rest_description,
      restaurant.rest_phone,
      restaurant.rest_rating,
    ];
    return this.storage
      .executeSql(
        `UPDATE rtable SET rest_name = ? , rest_address = ? , rest_postal = ? , rest_city = ? , rest_description = ? , rest_phone = ? , rest_rating = ? WHERE id = ${id}`,
        data
      )
      .then((data) => {
        this.getRestaurants();
      });
  }

  //delete
  deleteRestaurant(id) {
    return this.storage
      .executeSql('DELETE FROM rtable WHERE id = ?', [id])
      .then((res) => {
        this.getRestaurants();
      });
  }
}
