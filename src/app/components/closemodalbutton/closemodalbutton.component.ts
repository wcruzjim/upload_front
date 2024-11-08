import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-closemodalbutton',
  templateUrl: './closemodalbutton.component.html',
  styleUrls: ['./closemodalbutton.component.scss']
})
export class ClosemodalbuttonComponent implements OnInit {
  @Input('color') color;
  constructor() { 
    // This is intentional
  }

  ngOnInit() {
    // This is intentional
  }

}
