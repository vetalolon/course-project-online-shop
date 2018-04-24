import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { item } from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: item;
  constructor() { }

  ngOnInit() {
  }

}
