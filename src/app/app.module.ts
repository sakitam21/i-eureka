import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router
import { AppRoutingModule } from './app-routing.module';

//form
import { FormsModule } from '@angular/forms';

//HttpClient
import { HttpClientModule } from '@angular/common/http';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
