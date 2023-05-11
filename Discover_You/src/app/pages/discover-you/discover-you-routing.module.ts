import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverYouPage } from './discover-you.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverYouPageRoutingModule {}
