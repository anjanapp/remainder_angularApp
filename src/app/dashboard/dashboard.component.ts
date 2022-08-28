import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dash_form=this.fb.group({

    date:[''],
    ed:[''],
  
  })


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 

  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("please Log In")
      this.router.navigateByUrl("")
    }

  }


  addEvent(){
    
      // alert("deposit clicked")
      var date=this.dash_form.value.date
      var ed=this.dash_form.value.ed
      console.log(date);
      console.log(ed);
      
      
  
      
        this.ds.addEvent(date,ed)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
          }
        },
        result=>{
          alert(result.error.message)
        }
        )
  
      }

      logout(){

        localStorage.removeItem("currentUser")
        localStorage.removeItem("currentAcno")
        localStorage.removeItem("token")
    
        this.router.navigateByUrl("")
    
      }
    

  

  }




