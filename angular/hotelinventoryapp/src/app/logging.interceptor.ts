import { Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerserviceService } from './loggerservice.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(@Optional() public loggingService?: LoggerserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loggingService?.log("Request---> " + JSON.stringify(request));
    return next.handle(request);
  }
}
