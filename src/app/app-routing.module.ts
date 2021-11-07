import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResizeComponent } from './app-resize/resize.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/resize', pathMatch: 'full' },
  { path: 'resize', component: ResizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
