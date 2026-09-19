import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { TranslatePipe } from '../../pipes/translate.pipe';
import { ContactService } from '../../services/contact.service';
import { isContactFormConfigured } from '../../config/contact.config';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  readonly state = signal<SubmitState>('idle');
  readonly formEnabled = isContactFormConfigured();

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(3000)]],
    botcheck: ['']
  });

  get email() {
    return this.form.controls.email;
  }

  get subject() {
    return this.form.controls.subject;
  }

  get message() {
    return this.form.controls.message;
  }

  isInvalid(control: 'email' | 'subject' | 'message'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.dirty || c.touched);
  }

  onSubmit(): void {
    if (this.state() === 'sending') {
      return;
    }

    // Honeypot: silently pretend it worked.
    if (this.form.controls.botcheck.value) {
      this.state.set('success');
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('sending');

    const { email, subject, message, botcheck } = this.form.getRawValue();

    this.contactService.send({ email, subject, message, botcheck }).subscribe({
      next: () => {
        this.state.set('success');
        this.form.reset();
      },
      error: () => {
        this.state.set('error');
      }
    });
  }

  resetState(): void {
    this.state.set('idle');
  }
}
