import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from './files/file-upload/file-upload.component';
import { ComponentListComponent } from './lists/component-list/component-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FileUploadComponent,ComponentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'analyzer-app';
  components: string[] = [];

  onComponentsExtracted(components: string[]): void {
    this.components = components;
  }
}
