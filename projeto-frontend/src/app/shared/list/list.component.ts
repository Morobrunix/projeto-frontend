import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input()
headers:string[] = [];

@Output()
deleteEntity = new EventEmitter();

@Output()
searchEntity = new EventEmitter();

@Output()
limitEntity = new EventEmitter();


entities: any[] = [];
keys: string[]= [];
inputValue: string = " ";

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) => {
      this.entities = value['entities'];
    });

    this.keys = Object.keys(this.entities[0]);
  }

  Add(): void{
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });

  }
   editEntity(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
  deleteProduto(id: number){
    const objDelete = {
    id,
    callback: this.setEntity
  };
    this.deleteEntity.emit(objDelete);
  }


  search(): void {
    const objSearch = {
      query: this.inputValue,
      callback: this.setEntity
    };
    this.searchEntity.emit(objSearch);

  }
private setEntity(entities: any){
  this.entities=entities
}

}
