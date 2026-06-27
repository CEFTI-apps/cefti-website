import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Filiere } from '../models/filiere.model';

export type { Filiere };

@Injectable({ providedIn: 'root' })
export class FilieresService {
  readonly filieres = httpResource<Filiere[]>(() => '/assets/json/filieres.json');
}
