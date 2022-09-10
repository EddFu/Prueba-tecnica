import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'Character-Details',
    component: CharacterDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
