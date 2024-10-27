import { Component } from '@angular/core';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrl: './myinfo.component.css'
})
export class MyinfoComponent {

  images: string[] = [
    'assets/portfolio/myPic.jpg',
    'assets/portfolio/myPic.jpg',
    'assets/portfolio/myPic.jpg'
  ];


ngAfterViewInit() {
  const infoCard = document.getElementById('infoCard');
  const carouselDiv = document.getElementById('carouselDiv');

  const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add the slide-in class when the element is in view
              entry.target.classList.add('slide-in');
              observer.unobserve(entry.target); // Stop observing after the animation plays
          }
      });
  }, options);

  // Observe the elements
  if (infoCard) observer.observe(infoCard);
  if (carouselDiv) observer.observe(carouselDiv);
}



}
