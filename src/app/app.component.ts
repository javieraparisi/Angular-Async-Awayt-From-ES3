import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainService]
})
export class AppComponent implements OnInit{
  title = 'app';
  loading:boolean;
  stateLoading='cargando ...';

  constructor(private mainService: MainService) { }

  ngOnInit(){
    this.loading=true;
    this.getModel().then(model => {
      this.loading=false;
      this.stateLoading=model.cars[0].company;
    });
  }

  async getModel(){
    var model={
      persons: await this.mainService.getPersons(),
      cars: await this.mainService.getCars()
    };
    return model;
  }
}
