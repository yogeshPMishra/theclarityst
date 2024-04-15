import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-home-contacts',
  templateUrl: './home-contacts.component.html',
  styleUrls: ['./home-contacts.component.scss']
})
export class HomeContactsComponent {
  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['',[Validators.required,Validators.email]],
    message : ['',Validators.required]
  });
  constructor(private formBuilder: FormBuilder) {}
  onSubmit(event : Event){
    event.preventDefault();
    console.log(this.contactForm);
  }
  validateOnlyNum(event: KeyboardEvent): boolean {
    const charCode = event.key.charCodeAt(0);
    // Check if the key pressed is a number
    return (charCode >= 48 && charCode <= 57);
  }
}
