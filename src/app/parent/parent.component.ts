import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  form: FormGroup = this.fb.group({
    textField: ['']
  });;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSend() {
    const value = this.form.get('textField')?.value;
    this.messageService.sendMessage(value);
  }

  onComplete() {
    this.messageService.completeService();
  }

  onError() {
    this.messageService.sendError();
  }

}
