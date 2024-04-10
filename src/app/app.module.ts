import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { HomeMainComponent } from './pages/home/sections/home-main/home-main.component';
import { HomeAboutComponent } from './pages/home/sections/home-about/home-about.component';
import { HomeAnimatedtextComponent } from './pages/home/sections/home-animatedtext/home-animatedtext.component';
import { HomeWorksComponent } from './pages/home/sections/home-works/home-works.component';
import { HomeTestimonialsComponent } from './pages/home/sections/home-testimonials/home-testimonials.component';
import { HomeAccordionComponent } from './pages/home/sections/home-accordion/home-accordion.component';
import { HomeBlogsComponent } from './pages/home/sections/home-blogs/home-blogs.component';
import { HomeContactsComponent } from './pages/home/sections/home-contacts/home-contacts.component';
import { MicroCoachingComponent } from './pages/services/micro-coaching/micro-coaching.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServiceComponent } from './pages/services/service/service.component';
import { PodcastComponent } from './pages/unconventional/podcast/podcast.component';
import { BlogComponent } from './pages/unconventional/blog/blog.component';
import { CorporateCoachingComponent } from './pages/services/corporate-coaching/corporate-coaching.component';
import { UnconventionalLandingComponent } from './pages/unconventional/unconventional-landing/unconventional-landing.component';
import { SpecialisedCoachingComponent } from './pages/services/specialised-coaching/specialised-coaching.component';
import { ProjectsComponent } from './pages/services/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomepageComponent,
    HomeMainComponent,
    HomeAboutComponent,
    HomeAnimatedtextComponent,
    HomeWorksComponent,
    HomeTestimonialsComponent,
    HomeAccordionComponent,
    HomeBlogsComponent,
    HomeContactsComponent,
    MicroCoachingComponent,
    ContactusComponent,
    ServiceComponent,
    PodcastComponent,
    BlogComponent,
    CorporateCoachingComponent,
    UnconventionalLandingComponent,
    SpecialisedCoachingComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
