import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public title = 'NGX Picka-Period Demo';
  public config = {test: 'test'};
  public themeColor: 'light-theme' | 'dark-theme' = 'light-theme';

  private readonly _dateFormat = 'MM/DD/YYYY HH:mm';
  private readonly _from = moment().format(this._dateFormat);
  private readonly _to = moment().add(1, 'month').format(this._dateFormat);

  public value = `${this._from} - ${this._to}`;

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(this.themeColor);
  }

  public themeSwitcher() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeColor);
    this.themeColor = (this.themeColor === 'light-theme') ? 'dark-theme' : 'light-theme';
    body.classList.add(this.themeColor);
  }
}
