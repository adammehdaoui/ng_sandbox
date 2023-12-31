import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;
  snaps!: number;
  snapped!: boolean;

  ngOnInit() {
    this.title = 'Kyoto';
    this.description = 'Paysage du Japon';
    this.createdDate = new Date();
    this.imageUrl = "assets/images/kyoto.jpeg"
    this.snaps = 5;
    this.snapped = false;
  }

  onAddSnap() {
    this.snapped ? this.snaps-- : this.snaps++;
    this.snapped = !this.snapped;
  }
}
