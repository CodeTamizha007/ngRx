import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import * as fromAuth from './reducers'; 
import * as Auth from './Authreducers'; 
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { AuthEffects } from './Authreducers/Auth.effects';
import { coursereducer } from './Authreducers/auth.entity';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot( fromAuth.reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forFeature(Auth.authFeatureKey,Auth.authLogin),
    StoreModule.forFeature("Courses",coursereducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
