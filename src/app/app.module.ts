import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

/* AGREGADO  */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/*import { NgbdCarouselPause } from './carousel-pause';*/

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { RedsocialComponent } from './redsocial/redsocial.component';



@NgModule({

  declarations: [
    AppComponent,

    HomeComponent,

    MenuComponent,
    AboutComponent,
    ProjectsComponent,
    SkillComponent,
    ContactComponent,
    RedsocialComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],

  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
  
})
export class AppModule { }
