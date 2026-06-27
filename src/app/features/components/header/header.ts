import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly solid = signal(false);
  readonly open = signal(false);
  readonly dropdown = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.solid.set(window.scrollY > 20);
  }
}
