import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './Food/form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './Food/list/list.component';
import { ProdutoModule } from './Food/produto.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ProdutoModule]
})
export class FeatureModule { }
