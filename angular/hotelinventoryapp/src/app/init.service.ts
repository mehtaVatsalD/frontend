import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  public config: {[key in "env" | "ver"]: string}= {
    env: "local",
    ver: "0.0.0"
  }

  constructor() { }

  init() {
    console.log("Hum hai app initializer!");
    // this can be loaded via some other way instead of hardcoding
    this.config = {
      "env": "prod",
      "ver": "0.0.1", 

    }
  }
}
