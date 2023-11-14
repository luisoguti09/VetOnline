import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterOutlet } from '@angular/router';
import { IonRouterOutlet, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { CallPageModule } from './call/call.module';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterOutlet,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    DialogModule,
    ToastModule,
    BrowserAnimationsModule,
    FileUploadModule,
    AutoCompleteModule,
    CheckboxModule,
    DynamicDialogModule,
    CalendarModule,
    CallPageModule,
    AppModule
  ],
  providers: [{

    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('812772317778-j1k7i4oct0hb5rng5gehhkfm6poiu2d9.apps.googleusercontent.com') // your client id
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1490073028509814'),
        },
      ],
    } as SocialAuthServiceConfig,
  },
    AuthService],
  bootstrap: [AppComponent],
  exports: [
    MessagesModule,
    DialogModule,
    ToastModule,
    RouterOutlet
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
