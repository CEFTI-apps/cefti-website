import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splash-sceen',
  standalone:true,
  imports: [],
  templateUrl: './splash-sceen.html',
  styleUrl: './splash-sceen.scss'
})
export class SplashSceen {

    @Input()
    public show: boolean = true;

    @Output() emetteurNom =  new EventEmitter<string>()

  @Output() eventClose: () => void = () => {
    this.show = false;  
  }

  emettre(){
    this.emetteurNom.emit('Pasteque')
  }
}
