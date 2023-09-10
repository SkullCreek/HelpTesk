import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit{
  private ajax: any;
  public applied: any = [];
  public accepted: any = [];
  public rejected: any = [];
  constructor(private cService: CommonService){

  }
  ngOnInit(): void {
    this.ajax = this.cService.mocky();
    this.ajax.subscribe((response: any) => {
      
      for(let i = 0; i < response.data.length; i++){
        console.log(response.data[i]['status']);
        if(response.data[i]['status'] == "Applied"){
          this.applied.push(response.data[i])
        }else if(response.data[i]['status'] == "Accepted"){
          this.accepted.push(response.data[i])
        }else{
          this.rejected.push(response.data[i])
        }
      }
      
    },(error: any) => {
      alert(error);
    });
  }

  
}
