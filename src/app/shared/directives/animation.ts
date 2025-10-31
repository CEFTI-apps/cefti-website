import { Directive, ElementRef, Input, OnInit } from '@angular/core';
// Ajout de OnInit

@Directive({
  standalone: true,
  selector: '[appAnimation]',
})
export class AnimationDirective implements OnInit {
  // Implémenter OnInit

  // @Input pour recevoir une valeur du template (ex: [appAnimation]="3")
  @Input('appAnimation') orderShow: number = 0;

  // Le ratio est une constante de la directive
  private ratio = 0.1;

  // Injection de dépendance (ElementRef)
  constructor(private el: ElementRef) {}

  // L'endroit idéal pour initialiser la logique, car les @Input sont disponibles ici.
  ngOnInit(): void {
    // --- Logique dépendante de 'orderShow' déplacée ici ---

    // 1. Appliquer une classe pour le délai/l'ordre
    // Utilisation de this.orderShow qui a maintenant la bonne valeur du template
    this.el.nativeElement.classList.add(
      `reveal-${this.orderShow}` || 'reveal-2'
    );

    // 2. Définir l'IntersectionObserver
    const options = {
      root: null,
      roorMargin: '0px',
      threshold: this.ratio,
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        // Utilisation de this.ratio défini dans la classe
        if (entry.intersectionRatio > this.ratio) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // 3. Observer l'élément
    observer.observe(this.el.nativeElement);
  }
}
