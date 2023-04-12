import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { NgxAgoraSdkNgModule } from 'ngx-agora-sdk-ng';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    DialogModule,
    ToastModule,
    NgxAgoraSdkNgModule.forRoot({
      AppID: '3df3f408592a4f249c65c9134fa181b3',
      Video: { codec: 'h264', mode: 'rtc', role: 'host' }
    })
  ],
  providers: [{
    provide:
    RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },
    ],

  bootstrap: [AppComponent],
  exports:[
    MessagesModule,
    DialogModule,
    ToastModule
  ]
})
export class AppModule {}
