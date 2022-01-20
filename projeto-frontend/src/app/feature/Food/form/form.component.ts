import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/core/Module/Endereco';
import { EnderecosService as enderecosService } from 'src/app/core/service/enderecos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formEndereco:FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private enderecosService: enderecosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      id: '',
      city: ' ',
      county: ' ',
      state: '',
      zipCode: ''
    });
    }


    submit(event: Endereco): void {
      this.enderecosService.upsert(event).subscribe(() => {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      });
    }

  }


