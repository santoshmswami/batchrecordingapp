import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  http=inject(HttpClient)  // version 16 we got
  
  router=inject(Router)   // to navigate from .ts

  loginObj:any ={
    email:"",
    password:""
  }
  onLogin() {
    //post http request needs body
    //debugger
    this.http.post("https://feestracking.freeprojectapi.com/api/BatchUser/login",this.loginObj).subscribe({
      next:(res:any)=> {
        // debugger
        localStorage.setItem('batchuser',JSON.stringify(res.data))
        this.router.navigateByUrl('dashboard')
      },
      error:(err=>{
        debugger
        alert(err.error.message)
      })
    })
  }
}
