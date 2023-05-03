import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  miPortfolio: any;
  socialList: any;
  userRole: string = '';
  constructor(private datosPortfolio: PortfolioService, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => (
      this.miPortfolio = data));;

    this.datosPortfolio.obtenerDatos().subscribe(data => (
      this.socialList = data.social));;

    const authorities = JSON.parse(sessionStorage.getItem('AuthAuthorities') || '[]');
    this.userRole = authorities.find((authority: { authority: string }) => authority.authority === 'ROLE_ADMIN')?.authority || '';
  }

  edit(id: number) {
    this.router.navigate(['/editSocialMedia', id])
  }

  delete(id: number) {
    this.http.delete(enviroment + "socialMedia/delete/" + id)
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