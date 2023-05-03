import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projectsList: any;
  userRole : string = '';
  constructor(private datosPortfolio:PortfolioService, private router:Router, private http:HttpClient){ }

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>(
      this.projectsList = data.project));;

    const authorities = JSON.parse(sessionStorage.getItem('AuthAuthorities') || '[]');
    this.userRole = authorities.find((authority: { authority: string }) => authority.authority === 'ROLE_ADMIN')?.authority || '';
  }

  edit(id: number) {
    this.router.navigate(['/editProject', id])
  }

  delete(id: number) {
    this.http.delete(enviroment + 'project/delete/' + id)
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