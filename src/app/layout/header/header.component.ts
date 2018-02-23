import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  private _title: string;

  constructor() {
    this._title = 'ShoppingList';
  }

  /**
   * Get the header component title.
   *
   * @return string
   */
  get title(): string {
    return this._title;
  }

  ngOnInit() {
  }

}
