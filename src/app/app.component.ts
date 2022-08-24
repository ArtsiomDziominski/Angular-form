import { Component } from '@angular/core';
import {powers} from "./const";
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly powers: string[] = powers;
  public model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  public onSubmit(): void {
    this.submitted = true;
  }

  public onEdit(): void {
    this.submitted = false;
  }
}
