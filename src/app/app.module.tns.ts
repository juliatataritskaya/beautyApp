import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptUIAutoCompleteTextViewModule } from 'nativescript-ui-autocomplete/angular';
import { NativeScriptUIGaugeModule } from 'nativescript-ui-gauge/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HairComponent } from './category/hair/hair.component';
import { CategoryComponent } from './category/category.component';
import { ListCategoryComponent } from './category/list/list-category.component';
import { NailsComponent } from './category/nails/nails.component';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    ProfileComponent,
    FavoriteComponent,
    HairComponent,
    NailsComponent,
    CategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    ServicesModule,
    HttpClientModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule,
    NativeScriptUICalendarModule,
    NativeScriptUIChartModule,
    NativeScriptUIDataFormModule,
    NativeScriptUIAutoCompleteTextViewModule,
    NativeScriptUIGaugeModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule
  ],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule { }
