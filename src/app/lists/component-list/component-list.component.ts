import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-component-list',
  standalone: true,
  imports: [],
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.css'
})
export class ComponentListComponent {
  @Input() components: string[] = [];
}
