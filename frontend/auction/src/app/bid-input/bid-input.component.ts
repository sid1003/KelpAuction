import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bid-input',
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './bid-input.component.html',
  styleUrl: './bid-input.component.css'
})
export class BidInputComponent {

  
  newBid: number = 0;
  @Output() bidPlaced = new EventEmitter<number>();

  placeBid() {
    if (this.newBid > 0) {
      this.bidPlaced.emit(this.newBid);
    } else {
      alert('Bid must be greater than 0');
    }
  }

}
