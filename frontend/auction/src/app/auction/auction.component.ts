import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SocketService } from '../socket.service';  
import { BidInputComponent } from '../bid-input/bid-input.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UsernameFormComponent } from '../username-form/username-form.component';


@Component({
  selector: 'app-auction',
  imports: [CommonModule, BidInputComponent, PlayerListComponent, UserInfoComponent, UsernameFormComponent],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit {

  
  players: { name: string, bid: number, socketId: string }[] = [];
  currentBid: number = 0;
  highestBidder: string | null = null;
  highestBidderName: string | null = null;
  newBid: number = 0;
  tokenAmount: number = 500;
  userName: string = '';
  isUserNameSet: boolean = false; 
  lastBid: number = 0;
  currentTime: string = '';

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.onBidUpdate((data) => {
      const date = new Date();
      this.currentTime = `${date.getMilliseconds()}`
      console.log(data.highestBidderName+ " " + this.currentTime)
      this.currentBid = data.currentBid;
      this.highestBidder = data.highestBidder;
      this.highestBidderName = data.highestBidderName;
    });

    this.socketService.onPlayerUpdate((players) => {
      this.players = players.sort((a, b) => b.bid - a.bid);
      const socketId = this.socketService.getSocketId();
      const currentUser = this.players.find((player) => player.socketId === socketId);
      if (currentUser) {
        this.lastBid = currentUser.bid; 
      }
    });
  }

  onUserNameSet(userName: string): void {
    if (userName.trim() === '') {
      alert('Please enter a valid name');
      return;
    }

    this.userName = userName;
    this.socketService.setUserName(userName);
    this.isUserNameSet = true;
  }

  onBidPlaced(newBid: number): void {
    if (newBid % this.tokenAmount !== 0) {
      alert('Bid must be a multiple of ' + this.tokenAmount);
      return;
    }

    if (newBid <= this.currentBid) {
      alert('Bid must be higher than the current bid');
      return;
    }

    this.socketService.sendBid(newBid);
  }


}
