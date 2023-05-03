import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { Person } from 'src/app/model/person';
import { SocialMedia } from 'src/app/model/social-media';

@Component({
  selector: 'app-edit-social-media',
  templateUrl: './edit-social-media.component.html',
  styleUrls: ['./edit-social-media.component.css']
})
export class EditSocialMediaComponent implements OnInit {

  form!: FormGroup;
  name!: string;
  img!: string;
  link!: string;
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
    link: ['', Validators.required],
    person: ['', Validators.required]
  });
}

editSocialMedia() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  console.log('editEducation() called with id: ' + id);
  console.log('form values:', this.form.value);
  const editSocialMedia = new SocialMedia(
    this.form.value.name,
    this.form.value.img,
    this.form.value.link,
    this.person
  );
  console.log('editSocialMedia object:', editSocialMedia);
  this.http.put(enviroment + 'socialMedia/edit/' + id, editSocialMedia).subscribe({
    next: (data) => {
      console.log('response from server:', data);
      this.router.navigate(['/portfolio']);
    },
    error: (error) => console.error(error)
  });
}
}
