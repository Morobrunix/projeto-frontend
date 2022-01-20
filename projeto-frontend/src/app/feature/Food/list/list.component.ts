import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DeleteEvent } from 'src/app/core/Module/DeletEvent';
import { Endereco } from 'src/app/core/Module/Endereco';
import { SearchEvent } from 'src/app/core/Module/SearchEvent';
import { EnderecosService } from 'src/app/core/service/enderecos.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

headers: string [] = ['id', 'Cidade','País', 'Estado', 'Cep', 'Ações'];

  constructor(private produtosService: EnderecosService) { }

  ngOnInit(): void {}


    deleteProduto(event: DeleteEvent): void {
      this.produtosService.delete(event.id).subscribe(() => {
        this.produtosService.all().subscribe(event.callback);

      });
    }

    searchProduto(event: SearchEvent): void {
      this.produtosService.all(event.query).subscribe(event.callback);
    }


  }




