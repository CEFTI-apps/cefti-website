import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({ selector: '[tilt]' })
export class TiltDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mousemove', ['$event']) onMousemove(e: MouseEvent) {
    const r = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    this.el.nativeElement.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  @HostListener('mouseleave') reset() { this.el.nativeElement.style.transform = 'perspective(600px) rotateX(0) rotateY(0)'; }
}