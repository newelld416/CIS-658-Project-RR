import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  /**
   * This is my constructor
   */
  constructor() {

  }

  /**
   * This is my ngOnInit
   */
  ngOnInit() {
    const uppercaseString = this.uppercase('lowercase');
    console.log(uppercaseString);
  }

  /**
   * Private test method
   */
  uppercase(testString: string): string {
    return testString.toUpperCase();
  }
}
