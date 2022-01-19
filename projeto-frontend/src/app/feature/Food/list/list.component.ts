import { Component, OnInit } from '@angular/core';
import { DeleteEvent } from 'src/app/core/Module/DeletEvent';
import { Produtos } from 'src/app/core/Module/Produtos';
import { SearchEvent } from 'src/app/core/Module/SearchEvent';
import { ProdutosService } from 'src/app/core/service/produtos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
produtos:Produtos[] = [];
headers: string [] = ['id', 'Nome', 'Preço', 'Comentarios'];

  constructor(private produtosService: ProdutosService) { }

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


