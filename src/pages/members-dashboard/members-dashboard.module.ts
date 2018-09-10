import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersDashboardPage } from './members-dashboard';

@NgModule({
  declarations: [
    MembersDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersDashboardPage),
  ],
})
export class MembersDashboardPageModule {}
