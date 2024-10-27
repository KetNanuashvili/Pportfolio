import { Component, HostListener, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean=false;
  isEducationOpen: boolean=false;
  CertificationsOpen:boolean=false;
  skillsOpen:boolean=false;

  buttonsVisible = false;

  constructor(private titleService:Title, private renderer: Renderer2,){
    this.titleService.setTitle('Ketevan Nanuashvili- resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume/KetevanNanuashvili.pdf');
    link.setAttribute('download', 'KetevanNanuashvili.pdf');
    link.click();
    link.remove();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const componentPosition = document.getElementById('your-component-id').getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (componentPosition < screenPosition) {
      this.buttonsVisible = true; // Make buttons visible
    } else {
      this.buttonsVisible = false; // Hide buttons
    }
  }

  
}
