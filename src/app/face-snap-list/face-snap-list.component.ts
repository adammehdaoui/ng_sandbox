import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";
import { CommonModule, registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { FaceSnapComponent } from "../face-snap/face-snap.component";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
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
