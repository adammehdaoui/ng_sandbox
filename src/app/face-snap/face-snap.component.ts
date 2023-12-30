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
  date!: Date;
  imageUrl!: string;
  snaps!: number;

  ngOnInit() {
    this.title = 'Kyoto';
    this.description = 'Paysage du Japon';
    this.date = new Date();
    this.imageUrl = "assets/images/kyoto.jpeg"
    this.snaps = 5;
  }
}
