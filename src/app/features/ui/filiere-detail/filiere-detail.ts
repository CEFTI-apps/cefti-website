import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilieresService } from '../../../core/services/filieres.service';

@Component({
  selector: 'app-filiere-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './filiere-detail.html',
  styleUrl: './filiere-detail.scss',
})
export class FiliereDetail {
  private readonly svc = inject(FilieresService);

  readonly slug = input.required<string>();

  readonly filiere = computed(() =>
    this.svc.all().find((f) => f.slug === this.slug())
  );

  readonly notFound = computed(() =>
    !this.svc.isLoading() && !this.filiere()
  );

  readonly isLoading = computed(() => this.svc.isLoading());

  sectionLabel(section: string): string {
    const map: Record<string, string> = {
      'industrielle': 'Section industrielle',
      'informatique': 'Section informatique',
      'technique-industrielle': 'Technique industrielle',
      'technique-commerciale': 'Technique commerciale',
      'enseignement-general': 'Enseignement général',
    };
    return map[section] ?? section;
  }

  programLink(cat: 'pro' | 'aca'): string {
    return cat === 'pro' ? '/program/professional' : '/program/academic';
  }
}
