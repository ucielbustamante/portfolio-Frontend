import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { personNum } from 'src/app/global';
import { Person } from 'src/app/model/person';
import { SocialMedia } from 'src/app/model/social-media';

@Component({
  selector: 'app-new-social-media',
  templateUrl: './new-social-media.component.html',
  styleUrls: ['./new-social-media.component.css']
})
export class NewSocialMediaComponent implements OnInit {

  form!: FormGroup;
  name!: string;
  img!: string;
  link!: string;
  person!: Person;
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    link: ['', Validators.required],
    person: ['', Validators.required]
  });
}

newSocialMedia() {
  console.log('form values:', this.form.value);
  const newSocialMedia = new SocialMedia(
    this.form.value.name,
    this.form.value.img,
    this.form.value.link,
    this.person
  );
  console.log('newSocialMedia object:', newSocialMedia);
  this.http.post(enviroment + 'socialMedia/new/'+personNum, newSocialMedia).subscribe({
    next: (data) => {
      console.log('response from server:', data);
      this.router.navigate(['/portfolio']);
    },
    error: (error) => console.error(error)
  });
}
}
