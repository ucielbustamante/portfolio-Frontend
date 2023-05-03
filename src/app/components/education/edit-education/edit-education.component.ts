import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Education } from 'src/app/model/education';
import { Person } from 'src/app/model/person';
import { enviroment } from 'src/app/enviroment';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {
  form!: FormGroup;
  name!: string;
  img!: string;
  status!: string;
  person!: Person;

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
      img: ['', Validators.required],
      status: ['', Validators.required],
      person: ['', Validators.required]
    });
  }

  editEducation() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log('editEducation() called with id: ' + id);
    console.log('form values:', this.form.value);
    const editEducation = new Education(
      this.form.value.name,
      this.form.value.img,
      this.form.value.status,
      this.person
    );
    console.log('editEducation object:', editEducation);
    this.http.put(enviroment + 'education/edit/' + id, editEducation).subscribe({
      next: (data) => {
        console.log('response from server:', data);
        this.router.navigate(['/portfolio']);
      },
      error: (error) => console.error(error)
    });
  }
}
