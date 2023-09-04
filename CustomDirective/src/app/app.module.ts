import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { setBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { StyleDirective } from './CustomDirective/style.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    StyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
