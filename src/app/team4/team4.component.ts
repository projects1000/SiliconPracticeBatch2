import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';   

@Component({
  selector: 'app-team4',
  templateUrl: './team4.component.html',
  styleUrls: ['./team4.component.css']
})
export class Team4Component {

  constructor(private abc: DataserviceService) {  
    alert("Team4Component is created");
  }

  ngOnInit(): void {
    console.log(this.abc.serviceData);
  }
  handleClick() {
  alert("Button clicked!");
}


}
