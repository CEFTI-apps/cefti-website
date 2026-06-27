import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrustBand } from '../../../pages/home/sections/trust-band/trust-band';
import { Pourquoi } from '../../../pages/home/sections/pourquoi/pourquoi';
import { Parascolaire } from '../../../pages/home/sections/parascolaire/parascolaire';
import { CtaBand } from '../../../pages/home/sections/cta-band/cta-band';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, TrustBand, Pourquoi, Parascolaire, CtaBand],
  templateUrl: './home.html',
  styleUrls: ['./home.scss', './home-responsive.scss'],
})
export class Home {}
