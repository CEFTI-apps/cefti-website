import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashSceen } from './components/splash-sceen/splash-sceen';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,SplashSceen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cefti-website');

  noms = ['Banane']

  recevoir(nom:string){
    this.noms.push(nom)
  }
}
