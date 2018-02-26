import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    EducationComponent,
    WorkComponent,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
