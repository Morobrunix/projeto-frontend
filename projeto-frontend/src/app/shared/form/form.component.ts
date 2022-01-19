import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  formEntity: FormGroup = new FormGroup ({});

  @Output()
  submit = new EventEmitter();

  keys: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.keys = Object.keys(this.formEntity.value).filter(
      (key) => key !== 'id', ' imageUrl');


  this.activatedRoute.data.subscribe((value) => {
    if (value['entity']) {
      this.formEntity.patchValue(value['entity']);
    }

  });
}

goBack(): void {
  this.router.navigate(['..'], { relativeTo: this.activatedRoute });
}

clickOnSubmit(): void {
  if (this.formEntity.valid) {
    this.submit.emit(this.formEntity.value);
  }
}

}
