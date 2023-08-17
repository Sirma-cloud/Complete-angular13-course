import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() value: string ='Lifecycle'

  constructor() {
    console.log('Constructor callled!');
    console.log(this.value);
  }

  ngOnChanges(change : SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(change);

  }

  ngOnInit(){
    console.log('ngOnInit called!');
    // console.log(this.value);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');

  }
}


