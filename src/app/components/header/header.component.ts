import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isMenuOpen1 = false;
  isNavOpen = false;
  rotateArrow: string = "";
  currentUrl :string= "";
  constructor(private elementRef: ElementRef,private router:Router) {
    console.log(this.router.url);
    this.currentUrl = this.router.url;
  }
  @HostListener('document:click', ['$event'])

  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isNavOpen = false;
    }
  }
  submenuOpen1(){
    this.isMenuOpen = !this.isMenuOpen;
    if(this.isMenuOpen){
      this.isMenuOpen1 = false;
    }
  }
  submenuOpen2(){
    this.isMenuOpen1 = !this.isMenuOpen1;
    if(this.isMenuOpen1){
      this.isMenuOpen = false;
    }
  }


  openNav1(){
      this.isNavOpen = true;
  }
  closeNav(){
    this.isNavOpen= false;
  }
  closeNav1(event: Event){
    this.isNavOpen= false;
    event.stopPropagation();
  }
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
