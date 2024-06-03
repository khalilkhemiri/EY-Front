import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { LoginuserService } from '../service/loginuser.service';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User()
  constructor(private loginuserservice:LoginuserService , private router:Router,private authService: AuthService) { }

  ngOnInit(): void {
  }userlogin() {
    console.log(this.user.id);
  
    this.loginuserservice.loginUser(this.user).subscribe(
      (user: User) => {
        const userId = user.id;
        console.log("User ID:", userId);
         this.authService.setUserId(userId);
        
        this.router.navigateByUrl('/acceuil');
      },
      () => {
        alert("Login failed");
      }
    );
  }
  
  
}