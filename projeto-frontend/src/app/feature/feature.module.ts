import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { EnderecoModule } from './Food/endereco.module';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    EnderecoModule,
    FormsModule,
  ],
  exports:[]
})
export class FeatureModule { }
