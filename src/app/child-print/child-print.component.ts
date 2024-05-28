import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-child-print',
  templateUrl: './child-print.component.html',
  styleUrls: ['./child-print.component.scss']
})
export class ChildPrintComponent implements OnInit, OnDestroy {

  public message: string = "";

  private messageObservable$!: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageObservable$ = this.messageService.messsage$.subscribe({
      next: (msg) => {
        this.message = msg;
      },
      error: (error) => {
        this.message = error;
      },
      complete: () => {
        this.message = "Observable Complete!"
      }
    })
  }

  ngOnDestroy(): void {
    this.messageObservable$.unsubscribe();
  }

}
