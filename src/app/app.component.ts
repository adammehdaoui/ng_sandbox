import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
