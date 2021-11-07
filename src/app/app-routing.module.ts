import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGrayscaleComponent } from './app-grayscale/app-grayscale.component';
import { ResizeComponent } from './app-resize/resize.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/resize', pathMatch: 'full' },
  { path: 'resize', component: ResizeComponent },
  { path: 'grayscale', component: AppGrayscaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
