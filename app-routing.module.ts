import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CVComponent } from './cv/cv.component';


const routes: Routes = [
  { path: 'cv', component: CVComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

