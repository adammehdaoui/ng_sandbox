import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { FaceSnap } from "../models/face-snap.model";
import { FaceSnapsService } from "../services/face-snaps.service";
import { UpperCasePipe, CommonModule } from "@angular/common";

@Component({
  selector: 'app-single-face-app-component',
  standalone: true,
  imports: [
    RouterLink,
    UpperCasePipe,
    CommonModule
  ],
  templateUrl: './single-face-app-component.component.html',
  styleUrl: './single-face-app-component.component.scss'
})
export class SingleFaceAppComponentComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(): void {
    /** this.faceSnap.snapped ? this.faceSnap.snaps-- : this.faceSnap.snaps++; **/

    this.faceSnap.snapped
      ? this.faceSnapsService.snapById(this.faceSnap.id, "unsnap")
      : this.faceSnapsService.snapById(this.faceSnap.id, "snap");

    this.faceSnap.snapped = !this.faceSnap.snapped;
  }
}
