import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;  
  isMenuOpen = false;  
  openNewNav= false;


  constructor(private renderer: Renderer2 ){

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 1050;  
  }

  toggleMenu() {
    this.openNewNav = !this.openNewNav;
    this.isMenuOpen = !this.isMenuOpen;
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume/KetevanNanuashvili.pdf');
    link.setAttribute('download', 'KetevanNanuashvili.pdf');
    link.click();
    link.remove();
  }
}
