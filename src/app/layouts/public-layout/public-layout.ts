import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../../features/components/header/header';
import { Footer } from '../../features/components/footer/footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {}
