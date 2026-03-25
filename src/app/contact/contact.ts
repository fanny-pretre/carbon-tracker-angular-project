import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      // valeur par défaut, obligatoire, autre contrainte -> longueur, email...
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.pattern(/^[0-9 +()-]{6,20}$/)]],
      type: ['general', Validators.required]
    });

  }

  // Gestion de la soumission
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire envoyé :', this.contactForm.value);
      alert('Message envoyé 👍');

      this.contactForm.reset({
        type: 'general'
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}






