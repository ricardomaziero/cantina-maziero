import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.css']
})
export class ComponentCardComponent implements OnInit {

@Input() ItemAtual:any;

  constructor() { }

  ngOnInit(): void {
  }
}
