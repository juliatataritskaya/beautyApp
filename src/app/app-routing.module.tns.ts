import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HairComponent } from './category/hair/hair.component';
import { CategoryComponent } from './category/category.component';
import { ListCategoryComponent } from './category/list/list-category.component';
import {NailsComponent} from './category/nails/nails.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'main-page',
      pathMatch: 'full',
  },
  {
      path: 'main-page',
      component: MainPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
  {
    path: 'category',
    component: CategoryComponent, children: [
      {
        path: 'list',
        component: ListCategoryComponent,
      },
      {
        path: 'hair',
        component: HairComponent,
      },
      {
        path: 'nails',
        component: NailsComponent,
      }
    ]
  }

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
