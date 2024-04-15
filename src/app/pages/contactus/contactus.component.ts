import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    subject: ['',Validators.required],
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
