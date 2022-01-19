import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { Produtos } from 'src/app/core/Module/Produtos';
import { ProdutosService } from 'src/app/core/service/produtos.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class ProdutoDataResolver implements Resolve<Produtos[]> {
  constructor(private produtosService: ProdutosService) {}
  resolve() {
   return this.produtosService.all();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: ProdutoDataResolver,
    },

  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: ProdutoDataResolver,
    },
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProdutoDataResolver]
})
export class ProdutoRoutingModule { }
