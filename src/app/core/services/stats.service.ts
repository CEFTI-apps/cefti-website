import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Stat } from '../models/stat.model';

export type { Stat };

@Injectable({ providedIn: 'root' })
export class StatsService {
  readonly stats = httpResource<Stat[]>(() => '/assets/json/stats.json');
}
