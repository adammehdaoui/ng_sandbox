import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  onSnap() {
    this.faceSnap.snapped ? this.faceSnap.snaps-- : this.faceSnap.snaps++;
    this.faceSnap.snapped = !this.faceSnap.snapped;
  }
}
