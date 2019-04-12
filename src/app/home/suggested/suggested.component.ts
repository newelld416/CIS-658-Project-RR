import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
