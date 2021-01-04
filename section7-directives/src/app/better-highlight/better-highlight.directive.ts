import { ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input()
  defaultColor: string = 'transparent';

  @Input('appBetterHighlight')
  highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = this.defaultColor;
  

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this. defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }

}
