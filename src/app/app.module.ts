import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildCountCharsComponent } from './child-count-chars/child-count-chars.component';
import { ChildPrintComponent } from './child-print/child-print.component';
import { ChildTakeWhileComponent } from './child-take-while/child-take-while.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildCountCharsComponent,
    ChildPrintComponent,
    ChildTakeWhileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
