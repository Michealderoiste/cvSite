import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';
import {InterestsComponent} from './interests/interests.component';
import {AboutComponent} from './about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoutes: Routes = [
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'interest', component: InterestsComponent },
    { path: '', component: AboutComponent }

];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        InterestsComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
