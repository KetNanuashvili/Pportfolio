import { Component } from '@angular/core';
import { Project } from '../../models/interface';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project={} as Project
bsModalRef: any;
  constructor(){

  }
}
