import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
  stickynav: string = "";
  active_url : string = "";
  constructor( private renderer: Renderer2,private router: Router, private elementRef: ElementRef)  {
    console.log(this.router.url);
    this.currentUrl = this.router.url;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      console.log(this.isNavOpen);
      this.isNavOpen = false;
    }
  }
  @HostListener('window:scroll')
  onScroll() {
    if (window.pageYOffset >= 100) {
      this.renderer.addClass(this.stickynav, 'sticky');
    } else {
      this.renderer.removeClass(this.stickynav, 'sticky');
    }
  }
  ngOnInit(): void {
    this.stickynav = this.elementRef.nativeElement.querySelector('#sticky-nav');
    this.active_url =  this.router.url;
    console.log(this.active_url);
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
