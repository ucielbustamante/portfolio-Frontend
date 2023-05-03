import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged = false;
  isMenuOpen: boolean = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
    const dropdownButton = document.querySelector('.dropbtn');
    if (dropdownButton) {
      dropdownButton.addEventListener('click', (evt: Event) => {
        evt.stopPropagation();
        dropdownButton.classList.toggle('focus');
      });
    }
  
    document.addEventListener('click', () => {
      dropdownButton?.classList.remove('focus');
    });
  }

  onLogout():void{
    this.tokenService.onLogout();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
