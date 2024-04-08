import { Component } from '@angular/core';

@Component({
  selector: 'app-unconventional-landing',
  templateUrl: './unconventional-landing.component.html',
  styleUrls: ['./unconventional-landing.component.scss']
})
export class UnconventionalLandingComponent {
  panels = [
    { title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Section 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Section 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ];
  activePanelIndex: number | null = null;

  togglePanel(index: number) {
    if (this.activePanelIndex === index) {
      this.activePanelIndex = null; // Close the panel if it's already open
    } else {
      this.activePanelIndex = index; // Open the clicked panel
    }
  }
}


