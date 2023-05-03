import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


import { Person } from 'src/app/model/person';
import { personNum } from 'src/app/global';
import { enviroment } from 'src/app/enviroment';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{
  form!: FormGroup;
  name!: string;
  age!: number;
  img!: string;
  mail!: string;
  phone!: string;
  location!: string;
  description!: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      img: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  editAbout() {
    console.log('editAbout() called with id: ' + personNum);
    console.log('form values:', this.form.value);
    const editAbout = new Person(
      this.form.value.name,
      this.form.value.age,
      this.form.value.img,
      this.form.value.mail,
      this.form.value.phone,
      this.form.value.location,
      this.form.value.description,
    );
    console.log('editAbout object:', editAbout);
    this.http.put(enviroment +'person/edit/' + personNum, editAbout).subscribe({
      next: (data) => {
        console.log('response from server:', data);
        this.router.navigate(['/portfolio']);
      },
      error: (error) => console.error(error)
    });
  }
}