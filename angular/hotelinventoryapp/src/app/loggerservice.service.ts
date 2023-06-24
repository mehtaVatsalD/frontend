import { Injectable } from '@angular/core';

@Injectable()
export class LoggerserviceService {

  constructor() { }

  log(msg: string) {
    console.log(msg);
  }

}
