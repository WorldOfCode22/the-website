import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/routes/about/about.component';
import { ProjectsComponent } from './components/routes/projects/projects.component';
import { SkillsComponent } from './components/routes/skills/skills.component';
import { HomeComponent } from './components/routes/home/home.component';

export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
