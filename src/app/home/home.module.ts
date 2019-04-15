import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MaterialModule } from '@app/material.module';
import { FavoriteComponent } from './favorite/favorite.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { CreateComponent } from './create/create.component';
@NgModule({
  declarations: [HomeComponent, FavoriteComponent, SuggestedComponent, CreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class HomeModule { }
