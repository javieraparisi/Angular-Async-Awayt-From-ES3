import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  constructor() { }

  getPersons() {
    return new Promise(function(resolve) {
      setTimeout(function(){
        resolve([{id:1, name:'Paul'}]);
      }, 2000);
    });
  }

  getCars() {
    return new Promise(function(resolve) {
      setTimeout(function(){
        resolve([{id:7, company:'Ford'}]);
      }, 3000);
    });
  }

}
