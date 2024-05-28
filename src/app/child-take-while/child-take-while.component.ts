import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, takeUntil, takeWhile } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-child-take-while',
  templateUrl: './child-take-while.component.html',
  styleUrls: ['./child-take-while.component.scss']
})
export class ChildTakeWhileComponent implements OnInit, OnDestroy {

  public message: string = "";

  private messageObservable$!: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageObservable$ = this.messageService.messsage$
      .pipe(
        takeWhile(msg => msg != "Done")
      )
      .subscribe({
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
