import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError, timeout } from 'rxjs';

import { CONTACT_CONFIG } from '../config/contact.config';

export interface ContactMessage {
  email: string;
  subject: string;
  message: string;
  /** Honeypot: must stay empty. Bots fill it, humans never see it. */
  botcheck?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(payload: ContactMessage): Observable<void> {
    const body = {
      access_key: CONTACT_CONFIG.web3formsAccessKey,
      subject: payload.subject,
      email: payload.email,
      message: payload.message,
      from_name: 'Portfolio contact form',
      replyto: payload.email,
      botcheck: payload.botcheck ?? ''
    };

    return this.http
      .post<Web3FormsResponse>(CONTACT_CONFIG.web3formsEndpoint, body, {
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
      })
      .pipe(
        timeout(15000),
        map(response => {
          if (!response?.success) {
            throw new Error(response?.message ?? 'Submission rejected');
          }
        }),
        catchError(error => throwError(() => error))
      );
  }
}
