import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({ selector: '[revealOnScroll]' })
export class RevealOnScrollDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    node.style.opacity = '0'; node.style.transform = 'translateY(16px)';
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          node.animate([
            { opacity: 0, transform: 'translateY(16px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ], { duration: 600, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(node);
  }
}
