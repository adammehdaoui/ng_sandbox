import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";
import { CommonModule, registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from "../services/face-snaps.service";

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

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    registerLocaleData(fr.default);
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
