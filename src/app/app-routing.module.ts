import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyinfoComponent } from './components/myinfo/myinfo.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  { path: '', redirectTo: '/myinfo', pathMatch: 'full' }, 
 
  { path: 'myinfo', component: MyinfoComponent },        
  { path: 'resume', component: ResumeComponent },
  {path: 'portfolio', component: PortfolioComponent} ,
  {path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
