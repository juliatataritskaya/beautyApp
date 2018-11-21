import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ListCategoryComponent} from './category/list/list-category.component';
import {HairComponent} from './category/hair/hair.component';
import {NailsComponent} from './category/nails/nails.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    HomeComponent,
    ListCategoryComponent,
    HairComponent,
    NailsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
