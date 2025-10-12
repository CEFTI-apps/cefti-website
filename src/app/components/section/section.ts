import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss'
})
export class Section {
    @Input() title: string = '';
    @Input() subtitle: string = '';
}
