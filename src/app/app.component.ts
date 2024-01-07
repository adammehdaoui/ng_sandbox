import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from "./models/face-snap.model";
import * as fr from '@angular/common/locales/fr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    registerLocaleData(fr.default);

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
