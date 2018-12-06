import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/routes/about/about.component';
import { ProjectsComponent } from './components/routes/projects/projects.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
