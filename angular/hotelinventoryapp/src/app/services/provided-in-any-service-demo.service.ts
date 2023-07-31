import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class ProvidedInAnyServiceDemoService {

  constructor() {
    console.log("ProvidedInAnyServiceDemoService initialized");
  }
}
