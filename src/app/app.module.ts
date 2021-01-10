import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsPageComponent } from './news-page/news-page.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { TechPageComponent } from './tech-page/tech-page.component';
import { LifeStylePageComponent } from './life-style-page/life-style-page.component';
import { HealthPageComponent } from './health-page/health-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, NewsPageComponent, SportsPageComponent, TechPageComponent, LifeStylePageComponent, HealthPageComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
