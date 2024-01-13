import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FaceSnap } from "../models/face-snap.model";
import { FaceSnapsService } from "../services/face-snaps.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {}

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`).then(r  => {
        console.log(r ? console.log('navigation ok') : console.log('navigation ko'));
      }
    );
  }
}
