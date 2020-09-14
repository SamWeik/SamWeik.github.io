import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DisplayComponent } from './display/display.component';
import { NotesComponent } from './notes/notes.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: DisplayComponent},
  { path: 'Notes', component: DisplayComponent},
  { path: 'Resume', component: DisplayComponent}
  //{ path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, DisplayComponent, NotesComponent, ResumeComponent]
