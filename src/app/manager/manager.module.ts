import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

export const managerRoutes: Routes = [
  { path: '**', component: ManagerComponent },
];

@NgModule({
  declarations: [ManagerComponent],
  imports: [CommonModule,RouterModule.forChild(managerRoutes)],
})
export class ManagerModule {}
