import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { ManagerCoachingComponent } from './pages/services/corporate_coaching/manager-coaching/manager-coaching.component';
import { PerformanceCoachingComponent } from './pages/services/corporate_coaching/performance-coaching/performance-coaching.component';
import { SalesCoachingComponent } from './pages/services/corporate_coaching/sales-coaching/sales-coaching.component';
import { TeamCoachingComponent } from './pages/services/corporate_coaching/team-coaching/team-coaching.component';
import { MicroCoachingComponent } from './pages/services/micro-coaching/micro-coaching.component';
import { LeadingCareerComponent } from './pages/services/projects/leading-career/leading-career.component';
import { TalentAcquisitionComponent } from './pages/services/projects/talent-acquisition/talent-acquisition.component';
import { EntrepreneursComponent } from './pages/services/specialised_coaching/entrepreneurs/entrepreneurs.component';
import { LeaderDigitalTransformationComponent } from './pages/services/specialised_coaching/leader-digital-transformation/leader-digital-transformation.component';
import { WomenLeadersComponent } from './pages/services/specialised_coaching/women-leaders/women-leaders.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServiceComponent } from './pages/services/service/service.component';
import { BlogComponent } from './pages/unconventional/blog/blog.component';
import { PodcastComponent } from './pages/unconventional/podcast/podcast.component';
import { CorporateCoachingComponent } from './pages/services/corporate_coaching/corporate-coaching/corporate-coaching.component';
import { UnconventionalLandingComponent } from './pages/unconventional/unconventional-landing/unconventional-landing.component';

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
        component : ManagerCoachingComponent,
        path : "manager-coaching"
       },
       {
        component :  PerformanceCoachingComponent,
        path : "performance-coaching"
       },
       {
        component : SalesCoachingComponent,
        path : "sales-coaching"
       },
       {
        component : TeamCoachingComponent,
        path : "team-coaching"
       },
       {
        component : MicroCoachingComponent,
        path : "micro-coaching"
       },
       {
        component : LeadingCareerComponent,
        path : "leading-career"
       },
       {
        component : TalentAcquisitionComponent,
        path : 'talent-acquisition'
       },
       {
        component : EntrepreneursComponent,
        path : 'entrepreneurs'
       },
       {
        component : LeaderDigitalTransformationComponent,
        path : 'leader-digital-transformation'
       },
       {
        component : WomenLeadersComponent,
        path :  "women-leader"
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
