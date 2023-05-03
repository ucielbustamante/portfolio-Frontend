import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewProjectsComponent } from './components/projects/new-projects/new-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects/edit-projects.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { EditSocialMediaComponent } from './components/page/edit-social-media/edit-social-media.component';
import { NewSocialMediaComponent } from './components/page/new-social-media/new-social-media.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'editAbout',component:EditAboutComponent},
  {path:'newEducation',component:NewEducationComponent},
  {path:'editEducation/:id',component:EditEducationComponent},
  {path:'newSkill',component:NewSkillsComponent},
  {path:'editSkill/:id',component:EditSkillsComponent},
  {path:'newProject',component:NewProjectsComponent},
  {path:'editProject/:id',component:EditProjectsComponent},
  {path:'newSocialMedia',component:NewSocialMediaComponent},
  {path:'editSocialMedia/:id',component:EditSocialMediaComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
