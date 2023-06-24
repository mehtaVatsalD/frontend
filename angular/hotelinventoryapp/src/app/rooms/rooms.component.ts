import { Component, OnInit, Optional } from '@angular/core';
import { RoomDetails, RoomType, Roomz } from './rooms';
import { RoomsService } from './services/rooms.service';
import { LoggerserviceService } from '../loggerservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hotel Taj';
  roomDetails = {
    totalFloors: 7
  };
  rooms: Roomz = {
    totalRooms: 200,
    availableRooms: 100,
    bookedRooms: 50
  }

  roomList: RoomDetails[] = [];
  isHotelOpen = false;
  showRoomDetailsInTable = true;
  selectedRooms: RoomDetails[] = [];
  badData: string = "This is bad data, and it is not updated properly in all components";
  goodData: string = "This is good data, and it is updated properly in all components";

  constructor(/* Injecting services here */private roomsService: RoomsService,
    private httpClient: HttpClient,
    @Optional() private loggerService?: LoggerserviceService) {
    // ideally below given code would be fetched by making some http/rpc call
    // Hence this should not be the part of construtor and should be part of ngOnInit instead.
    // for(let i=1; i<=3; i++) {
    //   for (let j=1; j<=2; j++) {
    //       this.roomList.push({
    //         roomNumber: i*100 + j,
    //         photo: "Nai hai humare pass!",
    //         floor: i,
    //         price: Math.random() * 1000 + i * j,
    //         roomType: this.getRoomType(i),
    //         amenities: ["khana", "pina"],
    //         rating: Math.random()*10,
    //         checkinTime: new Date(),
    //         checkoutTime: new Date(new Date().getTime() + 24*3600*1000)
    //       })

    //   }
    // }
  }

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

  selectRoom(roomDetails: RoomDetails) {
    if (this.selectedRooms.indexOf(roomDetails) == -1) {
      this.selectedRooms = [...this.selectedRooms, roomDetails];
    }
  }

  finalizeAllRooms() {
    this.selectedRooms.forEach(roomDetails => {
      this.removeRoomFromList(roomDetails);
    });
    this.selectedRooms = [];
  }

  caseCntr: number = 0;
  changeGoodData = () => {
    this.goodData = this.caseCntr % 2 == 0 ? this.goodData.toUpperCase() : this.goodData.toLowerCase();
    this.caseCntr++;
  }

  private removeRoomFromList(roomDetails: RoomDetails) {
    const indexToRemove = this.roomList.indexOf(roomDetails);
    this.roomList = [...this.roomList.slice(0, indexToRemove), ...this.roomList.slice(indexToRemove + 1)];
  }

  ngOnInit(): void {
    this.roomsService.fetchAllRooms().subscribe(rooms => {
      this.roomList = rooms;
    });
    this.loggerService?.log("fetched all rooms");
  }
}
