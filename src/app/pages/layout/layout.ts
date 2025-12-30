import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Inject } from '@angular/core';
import { Login } from '../login/login';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
 loggedUserData:any
 router=Inject(RouterOutlet)
 checkLogin:any
 constructor() {
  const localData=localStorage.getItem('batchuser')
  if(localData!=null) {
    this.loggedUserData=JSON.parse(localData)
  }
 }
 onLogOff() {
  localStorage.removeItem('batchuser')
  this.router.navigate(['login'])
 }
 toggleSidebar() {

 }
}
