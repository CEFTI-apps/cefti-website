import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() centered: boolean = false;
  @Input() alignment: 'left' | 'center' | 'right' = 'left';
}
