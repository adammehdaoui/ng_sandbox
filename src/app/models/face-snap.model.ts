export class FaceSnap {
  /** OLD SYNTAX
  title: string;
  description: string;
  createdDate: Date;
  imageUrl: string;
  snaps: number;
  snapped: boolean;

  constructor(title: string, description: string, createdDate: Date, imageUrl: string, snaps: number,
              snapped: boolean) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.imageUrl = imageUrl;
    this.snaps = snaps;
    this.snapped = snapped; **/

  constructor(public title: string,
              public description: string,
              public createdDate: Date,
              public imageUrl: string,
              public snaps: number,
              public snapped: boolean) {
  }
}
