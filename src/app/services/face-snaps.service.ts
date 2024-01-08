import { Injectable } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
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
    }];
}
