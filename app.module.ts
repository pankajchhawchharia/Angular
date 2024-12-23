import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DataService } from './Service/data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ExampleComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
