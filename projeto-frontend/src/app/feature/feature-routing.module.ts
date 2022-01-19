import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../core/guards/permission.guard';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { FormComponent } from '../shared/form/form.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    canActivate: [PermissionGuard],
    loadChildren: async () =>
      import('./Food/produto.module').then((m) => m.ProdutoModule),
  },
  {
    path: "**",
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
