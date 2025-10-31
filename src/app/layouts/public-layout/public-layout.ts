import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../features/components/header/header';
import { Footer } from '../../features/components/footer/footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {}
