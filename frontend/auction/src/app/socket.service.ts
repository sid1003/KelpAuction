import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket = io('http://localhost:3000'); 

  constructor() { }

  onBidUpdate(callback: (data: { currentBid: number, highestBidder: string, highestBidderName: string }) => void) {
    this.socket.on('updateBid', callback);
  }

  
  sendBid(bid: number) {
    this.socket.emit('newBid', bid);
  }

  onPlayerUpdate(callback: (players: { name: string, bid: number, socketId: string }[]) => void) {
    this.socket.on('playerUpdate', callback);
  }

  
  setUserName(userName: string) {
    this.socket.emit('setUserName', userName);
  }

  getSocketId() {
    return this.socket.id;
  }

}
