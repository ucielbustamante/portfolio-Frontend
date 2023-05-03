import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/app/enviroment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educationList: any;
  userRole: string = '';
  constructor(private datosPortfolio: PortfolioService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => (
      this.educationList = data.education));;

    const authorities = JSON.parse(sessionStorage.getItem('AuthAuthorities') || '[]');
    this.userRole = authorities.find((authority: { authority: string }) => authority.authority === 'ROLE_ADMIN')?.authority || '';
  }

  edit(id: number) {
    this.router.navigate(['/editEducation', id])
  }

  delete(id: number) {
    this.http.delete(enviroment + "education/delete/" + id)
      .subscribe({
        next: () => {
          console.log('Delete successful');
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
