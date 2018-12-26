import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { AddpostComponent } from './addpost/addpost.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouteGuard } from './route-guard';
import { NotificationComponent } from './notification/notification.component';
import { NoticationService } from './shared/notification.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'register' , component:RegisterComponent},
  { path:'addpost' , component:AddpostComponent , canActivate:[RouteGuard]},
  { path:'allposts' , component:AllpostsComponent , canActivate:[RouteGuard]},
  { path:'**' , component:PagenotfoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    RegisterComponent,
    AllpostsComponent,
    AddpostComponent,
    PagenotfoundComponent,
    HomeComponent,HeaderComponent, NotificationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NoticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
