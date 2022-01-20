import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/core/Module/Endereco';
import { EnderecosService } from 'src/app/core/service/enderecos.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class EnderecosDataResolver implements Resolve<Endereco[]> {
  constructor(private enderecosService: EnderecosService) { }

  resolve() {
    return this.enderecosService.all();
  }
}

@Injectable()
export class EnderecoDataResolver implements Resolve<Endereco> {
  constructor(private enderecosService: EnderecosService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Endereco> {
    return this.enderecosService.getOne(route.params['id']);
  }
}


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: EnderecosDataResolver,
    }
  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: EnderecoDataResolver,
    },
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EnderecoDataResolver, EnderecosDataResolver]
})
export class EnderecoRoutingModule { }
