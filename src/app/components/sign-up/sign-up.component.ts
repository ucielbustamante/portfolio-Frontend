import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { NewUser } from 'src/app/model/new-user';
import { UserLogin } from 'src/app/model/user-login';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser!: NewUser;
  username!: string;
  password!: string;
  email!: string;
  errorMsg!: string;


  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  ngOnInit(): void {

  }

  onSignUp(): void {
    this.newUser = new NewUser(this.username, this.email ,this.password);
    this.http.post(enviroment + 'auth/new', this.newUser).subscribe({
      next: (data: any) => {
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
        this.router.navigate(['/login']);
      },
      error: (error: any) => console.error(error)
    })
  }

  get Username() {
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }

}
