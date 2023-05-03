import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { Person } from 'src/app/model/person';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  form!: FormGroup;
  img!: string;
  name!: string;
  description!: string;
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
    img: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    person: ['', Validators.required]
  });
}

editProject() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  console.log('editEducation() called with id: ' + id);
  console.log('form values:', this.form.value);
  const editProject = new Project(
    this.form.value.img,
    this.form.value.name,
    this.form.value.description,
    this.person
  );
  console.log('editProject object:', editProject);
  this.http.put(enviroment + 'project/edit/' + id, editProject).subscribe({
    next: (data) => {
      console.log('response from server:', data);
      this.router.navigate(['/portfolio']);
    },
    error: (error) => console.error(error)
  });
}
}
