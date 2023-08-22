import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() defaultColor: string ='transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink'
  @Input() title: string = 'this is the title';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(){
    this.background = this.highlightColor;
    this.border = 'black 2px solid';
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = this.defaultColor;
    this.border = 'none';

  }

}
