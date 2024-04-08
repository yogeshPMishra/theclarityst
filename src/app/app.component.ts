import { Component, OnDestroy, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { fromEvent, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  constructor(private router: Router) {}
 ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }
  });
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

  this.subscription1 = interval(100).pipe(take(7)).subscribe((value) => {
    this.counter1 = value;
  });
 }

 handleAccordion1 = ()=>{
  this.counter1 = 0;
    this.subscription1 = interval(100).pipe(take(7)).subscribe((value) => {
      this.counter1 = value;
    });
 }
 handleAccordion2 = ()=>{
  this.counter2 = 0;
  this.subscription2 = interval(100).pipe(take(7)).subscribe((value) => {
    this.counter2 = value;
  });
 }
  handleAccordion3 = ()=>{
    this.counter3 = 0;
    this.subscription3 = interval(100).pipe(take(7)).subscribe((value) => {
      this.counter3 = value;
    });
  }

//  ngOnDestroy(): void {
//   this.subscription1.unsubscribe(); // Unsubscribe to prevent memory leaks
//   this.subscription2.unsubscribe();
//   this.subscription3.unsubscribe();
// }

}
