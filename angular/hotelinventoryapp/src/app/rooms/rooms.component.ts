import { Component } from '@angular/core';
import { RoomDetails, RoomType, Roomz } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = 'Hotel Taj';
  roomDetails = {
    totalFloors: 7
  };
  rooms: Roomz = {
    totalRooms: 200,
    availableRooms: 100,
    bookedRooms: 50
  }

  roomList: RoomDetails[] = []

  constructor() {
    for(let i=1; i<=3; i++) {
      for (let j=1; j<=2; j++) {
          this.roomList.push({
            roomNumber: i*100 + j,
            photo: "Nai hai humare pass!",
            floor: i,
            price: Math.random() * 1000 + i * j,
            roomType: this.getRoomType(i),
            amenities: ["khana", "pina"],
            checkinTime: new Date(),
            checkoutTime: new Date(new Date().getTime() + 24*3600*1000)
          })

      }
    }
  }

  private getRoomType(i: number): RoomType {
    switch(i) {
      case 1: return RoomType.NORMAL;
      case 2: return RoomType.LUXURY;
      case 3: return RoomType.TERI_AUKAT_SE_BAHAR;
      default: return RoomType.TERI_AUKAT_SE_BAHAR;
    }
  }

  isHotelOpen = false;

  toggle() {
    this.isHotelOpen = !this.isHotelOpen;
  }

  bookAllRooms() {
    this.rooms.bookedRooms += this.rooms.availableRooms;
    this.rooms.availableRooms -= this.rooms.availableRooms;
  }

  freeAllRooms() {
    this.rooms.availableRooms += this.rooms.bookedRooms;
    this.rooms.bookedRooms -= this.rooms.bookedRooms;
  }
}
