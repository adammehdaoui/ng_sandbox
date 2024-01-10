import { Injectable } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";
import {FaceSnapComponent} from "../face-snap/face-snap.component";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Kyoto',
      description: 'Paysage du Japon',
      createdDate: new Date(),
      imageUrl: 'assets/images/kyoto.jpeg',
      snaps: 160,
      snapped: false
    }, {
      id: 2,
      title: 'Taiwan',
      description: 'Paysage de Taiwan',
      createdDate: new Date(),
      imageUrl: 'assets/images/taiwan.jpeg',
      snaps: 100,
      snapped: false,
      location: 'Centre-ville de Taiwan'
    }, {
    id: 3,
      title: 'Singapour',
      description: 'Paysage de Singapour',
      createdDate: new Date(),
      imageUrl: 'assets/images/singapore.jpeg',
      snaps: 20,
      snapped: false
    }];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap: FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error("le face snap n'a pas été trouvé");
    }
  }

  snapById(id: number, snapType: "snap" | "unsnap"): void {
    const faceSnapToChange: FaceSnap = this.getFaceSnapById(id);
    snapType === "snap" ? faceSnapToChange.snaps++ : faceSnapToChange.snaps--;
  }
}
