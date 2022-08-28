import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options={
  headers:new HttpHeaders()
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  login(acno:any,pswd:any){
    const data={
      acno,
      pswd
    }
     //asynchronous
    return this.http.post('http://localhost:3001/login',data)

  
  }

  register(username:any,acno:any,password:any){
    const data={
      username,
      acno,
      password
    }
    //asynchronous
    return this.http.post('http://localhost:3001/register',data)


  }

  addEvent(date:any,ed:any){
    const data={
      date,ed
    }
    return this.http.post('http://localhost:3001/addEvent',data,this.getOptions())
  
    }  
    getOptions(){
      const token = localStorage.getItem('token')
      let headers=new HttpHeaders()
      if(token){
        headers=headers.append('x-access-token',token)
        options.headers=headers
      }
      return options
    }
  
    getEvent(acno:any){
      const data={
        acno
      }
      return this.http.post('http://localhost:3001/getEvent',data,this.getOptions())
  
  
    }
  
  
  

}
