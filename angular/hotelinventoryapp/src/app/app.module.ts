import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { SuperGrandcComponent } from './rooms/parent/super-grandc/super-grandc.component';
import { SiblingComponent } from './rooms/sibling/sibling.component';
import { ParentComponent } from './rooms/parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { HighpriocontComponent } from './highpriocont/highpriocont.component';
import { LowpriocontComponent } from './lowpriocont/lowpriocont.component';
import { ContcontainerComponent } from './contcontainer/contcontainer.component';
import { APP_CONFIG_IT, APP_CONFIG } from './AppConfig/appconfig.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    SuperGrandcComponent,
    SiblingComponent,
    ParentComponent,
    HeaderComponent,
    HighpriocontComponent,
    LowpriocontComponent,
    ContcontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_CONFIG_IT,
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
