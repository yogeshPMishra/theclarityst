import { Component, } from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-home-animatedtext',
  templateUrl: './home-animatedtext.component.html',
  styleUrls: ['./home-animatedtext.component.scss']
})
export class HomeAnimatedtextComponent {
  constructor(){

  }
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.text');

    textElements.forEach((text:any) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }
}
