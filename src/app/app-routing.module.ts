import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LandingPageComponent } from './landingPage/landing-page/landing-page.component';
import { UserLoginComponent } from './login-Registration/user-login/user-login.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { MechanicListComponent } from './user/mechanicList/mechanic-list/mechanic-list.component';
import { MechanicLoginComponent } from './login-Registration/mechanic-login/mechanic-login.component';
import { AdminLoginComponent } from './login-Registration/admin-login/admin-login.component';
import { UserRegisterComponent } from './login-Registration/user-register/user-register.component';
import { MechanicRegisterComponent } from './login-Registration/mechanic-register/mechanic-register.component';
import { ContainerComponent } from './landingPage/container/container.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'dashboard', component: DashboardComponent },
// ];
const routes: Routes = [
  { path: '', component:LandingPageComponent,
    children:[
        {path:'',component:ContainerComponent,pathMatch:'full'},
        {path:'login/user',component:UserLoginComponent},
        {path:'login/mechanic',component:MechanicLoginComponent},
        {path:'login/admin',component:AdminLoginComponent},
        {path:'register/user',component:UserRegisterComponent},
        {path:'register/mechanic',component:MechanicRegisterComponent},
    ]
  },
  { path: 'userhome', component: UserHomeComponent,
    children:[
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'mechaniclist',component:MechanicListComponent},
    ]
  },
  //TODO: Add adminhome and mechanichome

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
