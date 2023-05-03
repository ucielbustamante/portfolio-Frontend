import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { personNum } from 'src/app/global';
import { Person } from 'src/app/model/person';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  form!: FormGroup;
  name!: string;
  value!: string;
  person!: Person;
  sliderValue : number = 50;
  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      person: ['', Validators.required]
    });
  }

  createSkill() {
    const newSkill = new Skill(
      this.name,
      this.value += "%",
      this.person,
    );
    this.http.post(enviroment + 'skill/new/'+personNum, newSkill).subscribe({
      next: (data) => {
        console.log(data),
        this.router.navigate(['/portfolio'])
      },
      error: (error) => console.error(error)
    });
  }

  updateValue(event: any) {
    this.sliderValue = event.target.value;
  }
}