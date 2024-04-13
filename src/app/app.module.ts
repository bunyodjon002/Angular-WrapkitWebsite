import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapsComponent } from './wraps/wraps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { Backgroundclass } from './direcitves/background.dirrective';
import { JsonPipeToObejct } from './pipes/Jspipes';


@NgModule({
  declarations: [
    AppComponent,
    WrapsComponent,
    DetailComponent,
    JsonPipeToObejct
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterLink,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
