import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/componentes/page-not-found/page-not-found.component';
import { PermissionGuard } from '../core/guards/permission.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'endereco',
    pathMatch: 'full',
  },
  {
    path: 'endereco',
    canActivate: [PermissionGuard],
    loadChildren: async () =>
      import('./Food/endereco.module').then((m) => m.EnderecoModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
