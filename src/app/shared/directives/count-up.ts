import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[countUp]' })
export class CountUpDirective implements OnInit {
  @Input('countUp') end = 0; @Input() duration = 1200;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    const start = performance.now(), node = this.el.nativeElement as HTMLElement;
    const tick = (t: number) => {
      const p = Math.min((t - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.floor(eased * this.end).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }; requestAnimationFrame(tick);
  }
}