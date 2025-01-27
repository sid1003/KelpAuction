import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-username-form',
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './username-form.component.html',
  styleUrl: './username-form.component.css'
})
export class UsernameFormComponent {

  userName: string = '';
  @Output() userNameSet = new EventEmitter<string>();

  setUserName() {
    if (this.userName.trim() !== '') {
      this.userNameSet.emit(this.userName);
    } else {
      alert('Please enter a valid name');
    }
  }

}
