import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private readonly router = inject(Router);

  readonly solid = signal(false);
  readonly open = signal(false);
  readonly dropdown = signal(false);

  ngOnInit(): void {
    // Sur chaque navigation, re-vérifier si la page courante a un héro sombre
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.open.set(false);
        setTimeout(() => this.checkHero(), 50);
      });
    // Vérification initiale (50 ms pour laisser Angular rendre la page)
    setTimeout(() => this.checkHero(), 50);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkHero();
  }

  private checkHero(): void {
    // Pages avec héro sombre (.hero-container home | .page-hero inner pages) :
    //   → transparent au repos, blanc givré après 20 px de scroll
    // Pages sans héro sombre (contact, personnel, visit, etc.) :
    //   → blanc givré immédiatement
    const hasDarkHero = !!document.querySelector('.hero-container, .page-hero');
    this.solid.set(!hasDarkHero || window.scrollY > 20);
  }
}
