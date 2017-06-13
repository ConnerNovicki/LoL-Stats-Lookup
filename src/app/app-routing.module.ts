import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputFormContainerComponent } from 'app/containers/input-form-container/input-form-container.component';
import { StatsDisplayContainerComponent } from 'app/containers/stats-display-container/stats-display-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/input-form',
    pathMatch: 'full'
  },
  {
    path: 'input-form',
    component: InputFormContainerComponent
  },
  {
    path: 'stats-display',
    component: StatsDisplayContainerComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
