import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberContainerComponent } from './member-container.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: MemberContainerComponent,
    children: [

      {
        path:'home',
        loadChildren: () =>
          import("../home-page/home-page.module").then((m) => m.HomePageModule),
      }
    ]
  }
]

@NgModule({
  declarations: [MemberContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MemberContainerModule { }
