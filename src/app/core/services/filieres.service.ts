import { computed, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Filiere } from '../models/filiere.model';

export type { Filiere };

@Injectable({ providedIn: 'root' })
export class FilieresService {
  private readonly filieres = httpResource<Filiere[]>(() => '/assets/json/filieres.json');

  readonly all = computed(() => this.filieres.value() ?? []);
  readonly isLoading = computed(() => this.filieres.isLoading());
}
