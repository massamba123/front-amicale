import { EtudiantComponent } from '../components/etudiant/etudiant.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UniversiteComponent } from '../components/universite/universite.component';
import { InscriptionComponent } from 'src/components/inscription/inscription.component';
import { FaculteComponent } from '../components/faculte/faculte.component';
import { DepartementComponent } from '../components/departement/departement.component';
import { NiveauComponent } from 'src/components/niveau/niveau.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    UniversiteComponent,
    InscriptionComponent,
    FaculteComponent,
    DepartementComponent,
    NiveauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
