import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/core/Module/Produtos';
import { ProdutosService } from 'src/app/core/service/produtos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formProduto:FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formProduto = this.formBuilder.group({
      id:'',
      imageUrl: '',
      name:'',
      price:'',
      department:'',
      comment:'',

    });
    }

    submit(event: Produtos): void {
      this.produtosService.upsert(event).subscribe(() => {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      });
    }

  }


