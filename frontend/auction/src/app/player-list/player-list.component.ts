import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';  // Import MatTableModule
import { MatHeaderRowDef, MatRowDef, MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-player-list',
  imports: [MatTableModule, MatHeaderRowDef, MatRowDef, MatCellDef],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {

  
  @Input() players: { name: string, bid: number }[] = [];

  displayedColumns: string[] = ['name', 'bid'];

}
