import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { HomeComponent } from './user/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LandingPageComponent } from './landingPage/landing-page/landing-page.component';
import { ContainerComponent } from './landingPage/container/container.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { UserLoginComponent } from './login-Registration/user-login/user-login.component';
import { AdminLoginComponent } from './login-Registration/admin-login/admin-login.component';
import { MechanicLoginComponent } from './login-Registration/mechanic-login/mechanic-login.component';
import { UserRegisterComponent } from './login-Registration/user-register/user-register.component';
import { MechanicRegisterComponent } from './login-Registration/mechanic-register/mechanic-register.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { MechanicListComponent } from './user/mechanicList/mechanic-list/mechanic-list.component';
import { MechanicListItemComponent } from './user/mechanicList/mechanic-list-item/mechanic-list-item.component';
import { SearchBarComponent } from './user/mechanicList/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingHeaderComponent } from './landingPage/landing-header/landing-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    LandingPageComponent,
    ContainerComponent,
    FooterComponent,
    UserLoginComponent,
    AdminLoginComponent,
    MechanicLoginComponent,
    UserRegisterComponent,
    MechanicRegisterComponent,
    UserHomeComponent,
    MechanicListComponent,
    MechanicListItemComponent,
    SearchBarComponent,
    LandingHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
