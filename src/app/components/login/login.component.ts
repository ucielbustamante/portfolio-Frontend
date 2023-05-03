import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  userLogin!: UserLogin;
  username!: string;
  password!: string;
  roles: string[] = [];
  errorMsg!: string;


  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private tokenService: TokenService, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.username, this.password);
    this.authService.login(this.userLogin).subscribe({
      next: (data: any) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio']);
      },
      error: (error: any) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMsg = error.error.message;
        console.log(this.errorMsg);
      }
    });
  }


  get Username() {
  return this.form.get('username');
}

  get Password() {
  return this.form.get('password');
}

}