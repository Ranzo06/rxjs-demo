import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messsage = new Subject<string>();
  messsage$ = this.messsage.asObservable();

  sendMessage(newMesssage: string): void {
    this.messsage.next(newMesssage);
  }

  completeService(): void {
    this.messsage.complete();
  }

  sendError(): void {
    this.messsage.error("Communication error");
  }
}
