import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilieresService } from '../../../core/services/filieres.service';
import { Filiere } from '../../../core/models/filiere.model';

type Tab = 'pro' | 'aca' | 'all';

@Component({
  selector: 'app-programmes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './programmes.html',
  styleUrl: './programmes.scss',
})
export class Programmes {
  private readonly route = inject(ActivatedRoute);
  private readonly svc = inject(FilieresService);

  readonly activeTab = signal<Tab>(
    (this.route.snapshot.data['tab'] as Tab) ?? 'all'
  );

  readonly allFilieres = computed<Filiere[]>(() => this.svc.all());

  readonly filtered = computed<Filiere[]>(() => {
    const tab = this.activeTab();
    const all = this.allFilieres();
    return tab === 'all' ? all : all.filter((f) => f.cat === tab);
  });

  readonly proCount = computed(() => this.allFilieres().filter((f) => f.cat === 'pro').length);
  readonly acaCount = computed(() => this.allFilieres().filter((f) => f.cat === 'aca').length);
  readonly totalCount = computed(() => this.allFilieres().length);

  readonly isLoading = computed(() => this.svc.isLoading());

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  sectionColor(section: string): string {
    const map: Record<string, string> = {
      'industrielle': 'var(--petrole)',
      'informatique': 'var(--petrole-2)',
      'technique-industrielle': 'var(--encre)',
      'technique-commerciale': 'var(--or-2)',
      'enseignement-general': 'var(--ardoise)',
    };
    return map[section] ?? 'var(--petrole)';
  }

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
}
