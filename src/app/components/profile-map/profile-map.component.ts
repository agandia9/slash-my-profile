import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AgmService } from 'src/services/agm.service';

@Component({
  selector: 'app-profile-map',
  templateUrl: './profile-map.component.html',
  styleUrls: ['./profile-map.component.sass']
})
export class ProfileMapComponent implements OnInit {
  lat:any;
  lng:any;
  constructor(
    private agmService: AgmService
  ){
    this.locate()
  }

  ngOnInit(): void {
    
  }

  public locate() {
    this.agmService.locate().then((resp:any) => {
      this.lat = resp.lat;
      this.lng = resp.lng;
    })
      
  }
}
