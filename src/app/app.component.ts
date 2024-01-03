import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
      title: 'Kyoto',
      description: 'Paysage du Japon',
      createdDate: new Date(),
      imageUrl: 'assets/images/kyoto.jpeg',
      snaps: 160,
      snapped: false
    }, {
      title: 'Taiwan',
      description: 'Paysage de Taiwan',
      createdDate: new Date(),
      imageUrl: 'assets/images/taiwan.jpeg',
      snaps: 100,
      snapped: false,
      location: 'Centre-ville de Taiwan'
    }, {
      title: 'Singapour',
      description: 'Paysage de Singapour',
      createdDate: new Date(),
      imageUrl: 'assets/images/singapore.jpeg',
      snaps: 20,
      snapped: false
    }]
  }
}
