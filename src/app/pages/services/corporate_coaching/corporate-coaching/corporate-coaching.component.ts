import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-corporate-coaching',
  templateUrl: './corporate-coaching.component.html',
  styleUrls: ['./corporate-coaching.component.scss']
})
export class CorporateCoachingComponent {
  panels = [
    { title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Section 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Section 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ];

  activePanelIndex: number | null = null;
  sections: HTMLElement[] = [];
  currentSectionId: string = '';
  progressBarWidth: string = '0%';
  navbar!: HTMLElement;
  fixed_tab! : HTMLElement;
  fixed_end! : HTMLElement;
  sticky!: number;
  scrollPosition: number = 0;
  constructor( private renderer: Renderer2,private router: Router, private elementRef: ElementRef) {}

  togglePanel(index: number) {
    if (this.activePanelIndex === index) {
      this.activePanelIndex = null; // Close the panel if it's already open
    } else {
      this.activePanelIndex = index; // Open the clicked panel
    }
  }

  ngOnInit() {
    this.sections = Array.from(this.elementRef.nativeElement.querySelectorAll('.tab-scroll'));
    // Update current section when route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCurrentSection();
    });

    // Listen for window scroll and resize events
    window.addEventListener('scroll', () => this.updateProgress());
    window.addEventListener('resize', () => this.updateProgress());

    this.navbar = this.elementRef.nativeElement.querySelector('#scroll-fixed');
    this.fixed_tab = this.elementRef.nativeElement.querySelector('#fixed-tab');
    this.fixed_end = this.elementRef.nativeElement.querySelector('#scroll-end');

    this.sticky = this.navbar.getBoundingClientRect().top;


  }



  updateCurrentSection() {
    let currentSection: HTMLElement | null = null;

    // Find the section in view
    for (const section of this.sections) {

      const rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        currentSection = section;
        console.log(currentSection);
        break;
      }
    }


    // Update the current section ID
    this.currentSectionId = currentSection ? currentSection.id : '';

  }

  updateProgress() {
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // Calculate the progress based on the current scroll position and viewport height
    const progress = Math.min(100, (scrollTop / (document.body.scrollHeight - viewportHeight)) * 100);

    // Update the progress bar width
    this.progressBarWidth = progress + '%';
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateCurrentSection();
    if (window.pageYOffset >= this.sticky) {
      this.renderer.addClass(this.fixed_tab, 'sticky');
    } else {
      this.renderer.removeClass(this.fixed_tab, 'sticky');
    }
  }
}
