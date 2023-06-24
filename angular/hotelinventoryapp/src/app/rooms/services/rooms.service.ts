import { Inject, Injectable } from '@angular/core';
import { RoomDetails, RoomType } from '../rooms';
import { APP_CONFIG_IT } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_CONFIG_IT) appConfig: AppConfig,
  private httpClient: HttpClient) { 
    console.log(appConfig.apiEndpoint);
  }

  fetchAllRooms() {
    return this.httpClient.get<RoomDetails[]>("/api/v1/rooms");
  }

}
