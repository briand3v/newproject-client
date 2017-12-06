import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';




// routes
import { RouterModule, Routes } from '@angular/router';

// services
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';


// components
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  { path: 'user', component: ProfileComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
