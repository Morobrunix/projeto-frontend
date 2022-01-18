import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formFood:FormGroup;

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
  this.formFood = this.formBuilder.group({
      id:'',
      name:'',
      price:'',
      comment:'',

    });
    }

  }


