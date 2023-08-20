import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  constructor() { }

  ngOnInit(): void {
    console.log(this.paragraphEl);
  }

  ngAfterContentInit(){
    this.paragraphEl.nativeElement.textContent = 'This is a new paragraph value.'
    console.log(this.paragraphEl?.nativeElement.textContent);
  }

  @ContentChild('paragraph')
  paragraphEl!: ElementRef;

}
