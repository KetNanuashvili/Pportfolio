import { Directive, ElementRef, Injectable, Input, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirectiveService  implements OnInit{

  @Input() appVisibility: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.appVisibility) {
          this.el.nativeElement.style.animation = 'buttonFadeIn 0.6s ease forwards';
          this.el.nativeElement.style.opacity = 1; // Set to visible
        } else {
          this.el.nativeElement.style.opacity = 0; // Set to invisible when not visible
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
