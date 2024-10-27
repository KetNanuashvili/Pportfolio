import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards = [
    {
      title: ' Logistics Company Application',
      image: '/assets/portfolio/logistics.jpg',
      description: ' the wider development team   Description: Developed a logistics management application for tracking shipments and facilitating client communication.',
      buttonLabel: 'View more',
      technologies:  'HTML, CSS, JavaScript, Typescript, Angular, Git'
    },
    {
      title: ' Food Service Application',
      image: '/assets/portfolio/food.jpg',
      description: 'Created a simple web application for a coffee shop where customers could view the menu, place orders, and pay online',
      buttonLabel: 'View more',
      technologies: 'HTML, CSS, JavaScript, Bootstrap'
    },
    {
      title: 'Video Content Management and Sharing Application',
      image: '/assets/portfolio/video.jpg',
      description: ' Working on an app that lets users manage and share video content, with features for uploading and categorizing videos..',
      buttonLabel: 'View more',
      technologies: 'HTML, CSS, TypeScript, Angular, Git'
    },
    {
      title: 'Real Estate Aplication',
      image: '/assets/portfolio/realestate.jpg',
      description: 'Developing a content management app for real estate listings, with features to upload property  images, categorize addresses, cities, ZIP codes, prices, and room counts, as well as add agent information.',
      buttonLabel: 'View more',
       technologies: 'HTML, CSS, TypeScript,  Angular, Git , Bootstrap'
    }
  ];
}
