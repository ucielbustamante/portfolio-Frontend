import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Education } from 'src/app/model/education';
import { Person } from 'src/app/model/person';
import { personNum } from 'src/app/global';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  form!: FormGroup;
  name!: string;
  img!: string;
  status!: string;
  person!: Person;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      status: ['', Validators.required],
      person: ['', Validators.required]
    });
  }

  createEducation() {
    const newEducation = new Education(
      this.name,
      this.img,
      this.status,
      this.person,
    );
    this.http.post('http://localhost:8080/education/new/'+personNum, newEducation).subscribe({
      next: (data) => {
        console.log(data),
        this.router.navigate(['/portfolio'])
      },
      error: (error) => console.error(error)
    });
  }
}