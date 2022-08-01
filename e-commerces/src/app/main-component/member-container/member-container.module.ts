import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberContainerComponent } from './member-container.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule
  ]
})
export class MemberContainerModule { }
