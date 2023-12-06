import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';

export const routes: Routes = [
    {path:'', redirectTo: 'cv', pathMatch: 'full'},
    {path:'cv', component: CvComponent},
    {path:'color', component: ColorComponent}
];

export const APP_ROUTING = RouterModule.forRoot(routes);