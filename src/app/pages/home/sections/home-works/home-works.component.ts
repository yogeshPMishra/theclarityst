import { Component,Renderer2  } from '@angular/core';
import { ScriptService } from "../../../../services/script.service";
const SCRIPT_PATHS = [
  'assets/js/script.js'
];
@Component({
  selector: 'app-home-works',
  templateUrl: './home-works.component.html',
  styleUrls: ['./home-works.component.scss']
})
export class HomeWorksComponent {


  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptService
  ) { }
  ngOnInit(): void {
    SCRIPT_PATHS.forEach(scriptPath => {
      this.loadScript(scriptPath);
    });

  }
  loadScript(scriptPath: string): void {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, scriptPath);
    scriptElement.onload = () => {
      console.log(`Script loaded: ${scriptPath}`);
      // Any additional logic after script loaded
    };
    scriptElement.onerror = () => {
      console.error(`Error loading script: ${scriptPath}`);
      // Handle error if needed
    };
  }

}
