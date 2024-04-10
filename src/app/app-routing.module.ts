import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { MicroCoachingComponent } from './pages/services/micro-coaching/micro-coaching.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServiceComponent } from './pages/services/service/service.component';
import { BlogComponent } from './pages/unconventional/blog/blog.component';
import { PodcastComponent } from './pages/unconventional/podcast/podcast.component';
import { CorporateCoachingComponent } from './pages/services/corporate-coaching/corporate-coaching.component';
import { UnconventionalLandingComponent } from './pages/unconventional/unconventional-landing/unconventional-landing.component';
import { ProjectsComponent } from './pages/services/projects/projects.component';
import { SpecialisedCoachingComponent } from './pages/services/specialised-coaching/specialised-coaching.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: "",
    children:[
      {
        component: HomepageComponent,
        path : "home",
      },
      {
        path :  "",
        redirectTo : "/home",
        pathMatch : "full"
      },
      {
        component : ContactusComponent,
        path:"contact-us"
      },
      {
        component : ServiceComponent,
        path:"services"
      },
      {
        component : CorporateCoachingComponent,
        path : "corporate-coaching"
       },
       {
        component : MicroCoachingComponent,
        path : "micro-coaching"
       },
       {
        component : ProjectsComponent,
        path : "projects"
       },
       {
        component : SpecialisedCoachingComponent,
        path : "specialised-coaching"
       },
       {
        component : UnconventionalLandingComponent,
        path:"unconventional"
       },
       {
        component : BlogComponent,
        path:"blogs"
       },
       {
        component : PodcastComponent,
        path : "podcast"
       }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
