import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverYouPageRoutingModule } from './discover-you-routing.module';

import { DiscoverYouPage } from './discover-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverYouPageRoutingModule
  ],
  declarations: [DiscoverYouPage]
})
export class DiscoverYouPageModule {}
