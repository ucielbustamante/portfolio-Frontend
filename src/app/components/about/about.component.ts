import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  miPortfolio: any;
  userRole: string = '';
  constructor(private datosPortfolio:PortfolioService){ }

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>(
      this.miPortfolio = data));;

      const authorities = JSON.parse(sessionStorage.getItem('AuthAuthorities') || '[]');
      this.userRole = authorities.find((authority: { authority: string }) => authority.authority === 'ROLE_ADMIN')?.authority || '';
  }
}