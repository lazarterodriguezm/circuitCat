// Default imports
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Main pages
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ReservationPage } from '../pages/reservation/reservation';
import { OffersPage } from '../pages/offers/offers';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';

// Secondary pages
import { CreateReservationPage } from '../pages/create-reservation/create-reservation';
import { ViewOffersPage } from '../pages/view-offers/view-offers';
import { GetOffersPage } from '../pages/get-offers/get-offers';
import { ViewReservationPage } from '../pages/view-reservation/view-reservation';
import { ViewOfferPage } from '../pages/view-offer/view-offer';
import { ChooseMenuPage } from '../pages/choose-menu/choose-menu';

// Providers
import { StorageProvider } from '../providers/storage/storage';

// Default plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Plugins
import { Push } from '@ionic-native/push';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireFunctionsModule } from 'angularfire2/functions';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
//import { AngularFireMessagingModule } from 'angularfire2/messaging';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { DatePicker } from '@ionic-native/date-picker';

var firebase = {
    apiKey: "AIzaSyAyiJZMWW7wC7FrmkkPtlU5b1PGwYOC4Lg",
    authDomain: "circuitcat-com.firebaseapp.com",
    databaseURL: "https://circuitcat-com.firebaseio.com",
    projectId: "circuitcat-com",
    storageBucket: "circuitcat-com.appspot.com",
    messagingSenderId: "1028410392491"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ReservationPage,
    OffersPage,
    MapPage,
    TabsPage,
    CreateReservationPage,
    ViewOffersPage,
    GetOffersPage,
    ViewReservationPage,
    ViewOfferPage,
    ChooseMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dayNames: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      dayShortNames: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    }),
    AngularFireModule.initializeApp(firebase), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule, // imports firebase/database only needed for database features
    //AngularFireFunctionsModule, // imports firebase/functions only needed for functions features
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    //AngularFireMessagingModule // imports firebase/messaging only needed for messaging features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ReservationPage,
    OffersPage,
    MapPage,
    TabsPage,
    CreateReservationPage,
    ViewOffersPage,
    GetOffersPage,
    ViewOfferPage,
    ViewReservationPage,
    ChooseMenuPage
  ],
  providers: [
    StorageProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Push,
    InAppBrowser,
    Device,
    DatePicker
  ]
})
export class AppModule {}
