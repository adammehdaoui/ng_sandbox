import { Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent }
];
