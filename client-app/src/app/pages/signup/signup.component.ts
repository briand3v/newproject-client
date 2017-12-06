import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.formInfo)
      .subscribe(
      (user) => this.user = user,
      (err) => this.error = err
      );
  }

}
