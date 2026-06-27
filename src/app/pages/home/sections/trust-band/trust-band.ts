import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { StatsService } from '../../../../core/services/stats.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-trust-band',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './trust-band.html',
  styleUrl: './trust-band.scss',
})
export class TrustBand {
  private readonly statsService = inject(StatsService);

  readonly items = computed(() => this.statsService.stats.value() ?? []);
  readonly isLoading = computed(() => this.statsService.stats.isLoading());
}
