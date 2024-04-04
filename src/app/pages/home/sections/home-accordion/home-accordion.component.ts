import { Component } from '@angular/core';
import {  interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home-accordion',
  templateUrl: './home-accordion.component.html',
  styleUrls: ['./home-accordion.component.scss']
})
export class HomeAccordionComponent {
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  constructor() {}
 ngOnInit(): void {


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
}
