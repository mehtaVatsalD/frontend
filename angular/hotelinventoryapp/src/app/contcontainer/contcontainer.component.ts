import { AfterContentChecked, AfterContentInit, Component, ContentChild, Host, OnDestroy, Optional } from '@angular/core';
import { HighpriocontComponent } from '../highpriocont/highpriocont.component';
import { LoggerserviceService } from '../loggerservice.service';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-contcontainer',
  templateUrl: './contcontainer.component.html',
  styleUrls: ['./contcontainer.component.scss'],
  providers: [RoomsService]
})
export class ContcontainerComponent implements AfterContentInit, OnDestroy {


  constructor(@Host() private roomsService: RoomsService) {
    
  }

  @ContentChild(HighpriocontComponent) hpc !: HighpriocontComponent;

  ngAfterContentInit(): void {
    this.hpc.data = this.hpc.data.toLocaleUpperCase();
  }

  ngOnDestroy(): void {
      alert("ContContainer says: Ahh I am getting killed!");
  }
  

}
