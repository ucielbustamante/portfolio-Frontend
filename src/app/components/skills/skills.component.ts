import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/app/enviroment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillList: any;
  userRole : string = '';
  constructor(private datosPortfolio:PortfolioService, private router:Router, private http:HttpClient){ }

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>(
      this.skillList = data.skills));;

    const authorities = JSON.parse(sessionStorage.getItem('AuthAuthorities') || '[]');
    this.userRole = authorities.find((authority: { authority: string }) => authority.authority === 'ROLE_ADMIN')?.authority || '';
  }

  edit(id: number) {
    this.router.navigate(['/editSkill', id])
  }

  delete(id: number) {
    this.http.delete(enviroment + 'skill/delete/' + id)
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
