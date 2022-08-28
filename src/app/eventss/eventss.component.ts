import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eventss',
  templateUrl: './eventss.component.html',
  styleUrls: ['./eventss.component.css']
})
export class EventssComponent implements OnInit {

  event:any
  acno=JSON.parse(localStorage.getItem("currentAcno")||'')


  constructor(private ds:DataService) {

    this.event=this.ds.getEvent(this.acno)
    .subscribe((result:any)=>{
      this.event=result.event
    },
    (result)=>{
      alert(result.error.message)
    }
    
    )


   }

  ngOnInit(): void {
  }

}

