import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { LoggingInterceptor } from './logging.interceptor';
import { InitService } from './init.service';
import { CompRoute1Component } from './comp-route1/comp-route1.component';
import { JunkComponent } from './junk/junk.component';
import { AppNavMainComponent } from './app-nav-main/app-nav-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompRoutewithsub2Component } from './comp-routewithsub2/comp-routewithsub2.component';

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
    ContcontainerComponent,
    CompRoute1Component,
    JunkComponent,
    AppNavMainComponent,
    NotfoundComponent,
    CompRoutewithsub2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {
      provide: APP_CONFIG_IT,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: function(initService: InitService) {
        return () => initService.init();
      },
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
