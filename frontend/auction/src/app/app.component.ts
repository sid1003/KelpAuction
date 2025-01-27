import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuctionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auction';
}
