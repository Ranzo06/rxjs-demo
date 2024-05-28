import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-child-count-chars',
  templateUrl: './child-count-chars.component.html',
  styleUrls: ['./child-count-chars.component.scss']
})
export class ChildCountCharsComponent implements OnInit, OnDestroy {

  public message: string = "";
  public messageCount: number = 0;

  private messageObservable$!: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messsage$.pipe(
      map(msg => msg.length)
    ).subscribe({
      next: (msgCount) => {
        this.messageCount = msgCount;
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
