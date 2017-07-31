import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages';
//AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Service Imports
import { ClientService } from './services/client.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'client/:id', component: ClientDetailsComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyCAfxxEEjI_PTqM3X_SL3h56HRhEYXkOO0",
  authDomain: "clientpanel-5509b.firebaseapp.com",
  databaseURL: "https://clientpanel-5509b.firebaseio.com",
  storageBucket: "clientpanel-5509b.appspot.com",
  messagingSenderId: "203116118170"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),   
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
