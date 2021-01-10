import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthPageComponent } from './health-page/health-page.component';
import { LifeStylePageComponent } from './life-style-page/life-style-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { TechPageComponent } from './tech-page/tech-page.component';

const routes: Routes = [
    {
        path: 'news',
        component: NewsPageComponent,
    },
    {
        path: 'tech',
        component: TechPageComponent,
    },
    {
        path: 'sports',
        component: SportsPageComponent,
    },
    {
        path: 'life-style',
        component: LifeStylePageComponent,
    },
    {
        path: 'health',
        component: HealthPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
