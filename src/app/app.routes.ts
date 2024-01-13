import { Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import {SingleFaceAppComponentComponent} from "./single-face-app-component/single-face-app-component.component";

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'facesnaps/:id', component: SingleFaceAppComponentComponent }
];
