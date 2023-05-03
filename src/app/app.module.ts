import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './services/interceptor.service';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    PortfolioComponent,
    LoginComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    NewProjectsComponent,
    EditProjectsComponent,
    SignUpComponent,
    EditAboutComponent,
    EditSocialMediaComponent,
    NewSocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }