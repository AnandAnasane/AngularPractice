import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GETComponent } from './components/API/get/get.component';
import { ServicesComponent } from './components/services/services.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirComponent } from './components/dir/structural-dir/structural-dir.component';
import { ComponentDirComponent } from './components/dir/component-dir/component-dir.component';
import { AttributeDirComponent } from './components/dir/attribute-dir/attribute-dir.component';
import { IntroComponent } from './components/intro/intro.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GETComponent, ServicesComponent, DatabindingComponent, StructuralDirComponent, ComponentDirComponent, AttributeDirComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceQ';
}
