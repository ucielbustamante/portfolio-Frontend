import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { personNum } from 'src/app/global';
import { Person } from 'src/app/model/person';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {
  form!: FormGroup;
  img!: string;
  name!: string;
  description!: string;
  person!: Person;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      img: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      person: ['', Validators.required]
    });
  }

  createProject() {
    const newProject = new Project(
      this.img,
      this.name,
      this.description,
      this.person,
    );
    this.http.post(enviroment + 'project/new/'+personNum, newProject).subscribe({
      next: (data) => {
        console.log(data),
        this.router.navigate(['/portfolio'])
      },
      error: (error) => console.error(error)
    });
  }
}