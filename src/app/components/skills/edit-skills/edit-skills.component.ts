import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { Person } from 'src/app/model/person';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})


export class EditSkillsComponent implements OnInit {

  form!: FormGroup;
  name!: string;
  value!: string;
  person!: Person;
  sliderValue: number = 50;
  
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
    value: ['', Validators.required],
    person: ['', Validators.required]
  });
}

editSkill() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  console.log('editEducation() called with id: ' + id);
  console.log('form values:', this.form.value);
  const editEducation = new Skill(
    this.form.value.name,
    this.form.value.value += "%",
    this.person
  );
  console.log('editSkill object:', editEducation);
  this.http.put(enviroment + 'skill/edit/' + id, editEducation).subscribe({
    next: (data) => {
      console.log('response from server:', data);
      this.router.navigate(['/portfolio']);
    },
    error: (error) => console.error(error)
  });
}


updateValue(event: any) {
  this.sliderValue = event.target.value;
}
}
