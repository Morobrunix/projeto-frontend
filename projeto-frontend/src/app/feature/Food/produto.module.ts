import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
     ProdutoRoutingModule,
     SharedModule,

  ],
  providers: [],

})
export class ProdutoModule { }
