import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutDataComponent } from './about-data/about-data.component';
import { BeyondCalceeComponent } from './beyond-calcee/beyond-calcee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CalceeComponent } from './calcee/calcee.component';
import { EeaComponent } from './eea/eea.component';
import { FastexpoComponent } from './fastexpo/fastexpo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calcee', component: CalceeComponent},
  {path: 'eea', component: EeaComponent},
  {path: 'fastexpo', component: FastexpoComponent},
  {path: 'aboutme', component: AboutDataComponent},
  {path: 'beyondcalcee', component: BeyondCalceeComponent},
  {path: 'contact', component: ContactComponent},
  //wild card route should be the last route in the routes array
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [AboutDataComponent, 
                                  BeyondCalceeComponent, 
                                  PageNotFoundComponent, 
                                  HomeComponent, 
                                  CalceeComponent,
                                  EeaComponent,
                                  FastexpoComponent,
                                  ContactComponent];