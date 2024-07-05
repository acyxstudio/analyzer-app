import { Component } from '@angular/core';
import * as ts from 'typescript';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  components: string[] = [];
  constructor() {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      files.forEach(file => this.readFile(file));
    }
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      this.parseSourceCode(content);
    };
    reader.readAsText(file);
  }

  parseSourceCode(sourceCode: string): void {
    const sourceFile = ts.createSourceFile('temp.ts', sourceCode, ts.ScriptTarget.Latest, true);
    this.listComponents(sourceFile);
  }

  listComponents(sourceFile: ts.SourceFile): void {
    const components: string[] = [];
    const visit = (node: ts.Node) => {
     /*  if (ts.isClassDeclaration(node) && node.decorators) {
        node.decorators.forEach(decorator => {
          if (ts.isCallExpression(decorator.expression) &&
              ts.isIdentifier(decorator.expression.expression) &&
              decorator.expression.expression.escapedText === 'Component') {
            components.push(node.name?.getText() || 'UnnamedComponent');
          }
        });
      } */
      ts.forEachChild(node, visit);
    };
    visit(sourceFile);
    this.components = components;
  }
}
