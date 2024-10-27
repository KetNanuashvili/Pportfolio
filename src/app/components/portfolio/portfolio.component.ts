import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../models/interface';
import { animate, style, transition, trigger } from '@angular/animations';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',

})
export class PortfolioComponent implements OnInit {
  cards = [];

  
  constructor(private cardService:CardService){

  }
  ngOnInit(): void {
    this.cards = this.cardService.cards;
  }
  
}
