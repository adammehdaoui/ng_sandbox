import {Component, Inject, Input} from '@angular/core';
import { CommonModule } from "@angular/common";
import { FaceSnap } from "../models/face-snap.model";
import { FaceSnapsService } from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  onSnap() {
    /** this.faceSnap.snapped ? this.faceSnap.snaps-- : this.faceSnap.snaps++; **/

    this.faceSnap.snapped
      ? this.faceSnapsService.snapById(this.faceSnap.id, "unsnap")
      : this.faceSnapsService.snapById(this.faceSnap.id, "snap");

    this.faceSnap.snapped = !this.faceSnap.snapped;
  }
}
