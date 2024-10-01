import { Component } from '@angular/core';
import { WorldBankService } from './world-bank.service';  
import { Observable } from 'rxjs'; //Reactive Extensions for JavaScript
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, //Standalone
  template: `<a routerLink="/">Home</a>`

})

export class AppComponent {
  countryData: any;

  
  //Constructor creates instance.
  constructor(public worldBankService: WorldBankService, private router: Router) {}
  

  ngOnInit() {

  }


  //MouseOver Function
  onMouseOver(event: MouseEvent) {
    // Check if the hovered element is a path
    const target = event.target as SVGPathElement;

    if (target.tagName === 'path' && target.id) {
      console.log('Mouse over on: ', target.id);
      this.fetchCountryData(target.id);
    }
  }

  //"Observable" is a class that helps with Async data. Values/events emitted over time.
    //Next: Emit value
    //Error: Handle Error Event
    //Complete: No more values will be emitted.
//"any" simply means any value of any type.


//Triggers the service method when a country is selected.
//Called in onMouseOver()
fetchCountryData(countryName: string): void {
  this.worldBankService.getCountryData(countryName).subscribe(
    (data: any[]) => {
      if (!countryName ){
        console.log("Can't find country name");
      }
      
      const countryData = data[1][0];

      if (countryData) {
        this.countryData = {
          name: countryData.name,
          capital: countryData.capitalCity,
          population: countryData.population,
          region: countryData.region?.value,
          incomeLevel: countryData.incomeLevel?.value,
          longitude: countryData.longitude,
          latitude: countryData.latitude
        };
      }
      else{
        console.log("Cant find CountryData");
      }
    },
    (error: any) => {
      console.error(`Error fetching country data for ${countryName}:`, error);
    }
  );


}
}
