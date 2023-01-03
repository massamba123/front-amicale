import { EtudiantComponent } from '../components/etudiant/etudiant.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { UniversiteComponent } from '../components/universite/universite.component';
import { InscriptionComponent } from 'src/components/inscription/inscription.component';
import { FaculteComponent } from '../components/faculte/faculte.component';
import { DepartementComponent } from '../components/departement/departement.component';
import { NiveauComponent } from '../components/niveau/niveau.component';
import { MatSlideToggleModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LatteraleComponent } from './latterale/latterale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PosteComponent } from './poste/poste.component';


const routes : Routes = [
  {path : "app",component : AppComponent},
  {path : 'header',component : HeaderComponent},
  {path : 'laterale',component : LatteraleComponent},
  {path: 'universite', component: UniversiteComponent},
  {path : 'faculte',component : FaculteComponent},
  {path : 'departement', component : DepartementComponent},
  {path : 'niveau', component : NiveauComponent},
  {path : 'inscription', component : InscriptionComponent},
  {path : 'etudiant', component : EtudiantComponent}

]

@NgModule({
  declarations : [
    AppComponent,UniversiteComponent,
    NiveauComponent,FaculteComponent,
    DepartementComponent,EtudiantComponent,
    InscriptionComponent,
    HeaderComponent,
    LatteraleComponent,
    DashboardComponent,
    PosteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  bootstrap : [AppComponent]
})
export class AppModule { }
