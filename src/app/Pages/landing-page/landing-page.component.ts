import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
  // providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class LandingPageComponent implements OnInit {
  // return Object.assign(new AccordionConfig(), { closeOthers: true });

  public menucollapse = false;



  nails = ['../../../assets/images/032122_ARTIPS_FLORET_056.jpg']

  nailstrips = ['../../../assets/images/032122_ARTIPS_FLORET_007.jpg']

  yellow = ['../../../assets/images/main+test+3.jpg']

  art = ['../../../assets/images/Artboard-4-100.jpg']

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }
  

  ngOnInit(): void {
    
    
    
  }

}