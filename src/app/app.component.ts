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
  faceSnapKyoto!: FaceSnap
  faceSnapTaiwan!: FaceSnap
  faceSnapSingapore!: FaceSnap

  ngOnInit() {
    this.faceSnapKyoto = new FaceSnap(
      'Kyoto',
      'Paysage du Japon',
      new Date(),
      'assets/images/kyoto.jpeg',
      5,
      false);

    this.faceSnapTaiwan = new FaceSnap(
      'Taiwan',
      'Paysage de Taiwan',
      new Date(),
      'assets/images/taiwan.jpeg',
      23,
      false);

    this.faceSnapSingapore = new FaceSnap(
      'Kyoto',
      'Paysage de Singapour',
      new Date(),
      'assets/images/singapore.jpeg',
      2,
      false);
  }
}
