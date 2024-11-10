import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const app = initializeApp({
  "projectId":"b-1accc",
  "appId":"1:606986248368:web:df6c0a16fa5bc4ed9a9b75",
  "storageBucket":"b-1accc.firebasestorage.app",
  "apiKey":"AIzaSyDp4RCs8UwhBrTNivTVoBkbDwQ_s1LYxLI",
  "authDomain":"b-1accc.firebaseapp.com",
  "messagingSenderId":"606986248368",
  "measurementId":"G-QDN8GEEH17"
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}