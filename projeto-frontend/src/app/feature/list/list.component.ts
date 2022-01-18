import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  headers: string [] = ['id', 'Nome', 'Preço', 'Comentarios'];
  constructor() { }

  ngOnInit(): void {
  }


}
