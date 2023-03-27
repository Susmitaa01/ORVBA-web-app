import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
   
  username;
  password;

  loginUser(){
    this.userService.login(this.username,this.password)
    .subscribe((result: any) => {
      
      console.log('[+] mechanics assigned')
  })
  }

}
