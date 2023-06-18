import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomDetails } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges{

  @Input() listName: string = "Some Room List";
  @Input() roomList: RoomDetails[] = [];
  @Input() showRoomDetailsInTable: boolean = false;
  @Input() isListForSelectedRooms: boolean = false;
  @Output() selectedRoom = new EventEmitter<RoomDetails>();
  @Output() finalize = new EventEmitter<void>();

  // @Input() toggleRoomDetailsOptions: () => void = function(){};

  // this will not be appearing for ngoncgnages as is being internally updated
  toggleRoomDetailsOptions() {
    this.showRoomDetailsInTable = !this.showRoomDetailsInTable;
  }

  selectRoom(roomDetails: RoomDetails) {
    this.selectedRoom.emit(roomDetails);
  }

  finalizeAllRooms() {
    this.finalize.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['listName']) {
      this.listName = changes['listName'].currentValue.toUpperCase();
    }
  }


}
