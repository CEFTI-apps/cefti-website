import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHero, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly submitState = signal<'idle' | 'success'>('idle');

  onSubmit(e: Event): void {
    e.preventDefault();
    // TODO: connecter à l'API backend
    this.submitState.set('success');
  }
}
