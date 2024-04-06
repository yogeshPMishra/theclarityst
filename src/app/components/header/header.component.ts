import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isSubmenuOpen = false;
  isSubmenuOpen1 = false;
  isSubmenuOpen2 = false;
  isMenuOpen1 = false;
  isNavOpen = false;
  rotateArrow: string = "";
  submenuOpen1(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  submenuOpen2(){
    this.isMenuOpen1 = !this.isMenuOpen1;
  }
  innerMenuOpen1(event: Event){
    this.isSubmenuOpen = !this.isSubmenuOpen;
    console.log(this.isSubmenuOpen);
    event.stopPropagation();
  }
  innerMenuOpen2(event: Event){
    this.isSubmenuOpen1 = !this.isSubmenuOpen1;
    event.stopPropagation();
  }
  innerMenuOpen3(event: Event){
    this.isSubmenuOpen2 = !this.isSubmenuOpen2;
    event.stopPropagation();
  }

  openNav1(){
      this.isNavOpen = true;
  }
  closeNav1(event: Event){
    this.isNavOpen= false;
  }
}
