import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostMessageModule } from 'ngx-post-message';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostMessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
