import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnderecoRoutingModule } from './endereco-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class EnderecoModule { }
