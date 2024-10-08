import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './AppMaterial/app-material/app-material.module';
import { MatButtonModule } from '@angular/material/button';
import { NovoAgendamentoComponent } from './components/novo-agendamento/novo-agendamento.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { ConfirmaAgendamentoComponent } from './components/dialogs/confirma-agendamento/confirma-agendamento.component';
import { NgxMaskModule} from 'ngx-mask';
import { ValidaAgendamentoComponent } from './components/dialogs/valida-agendamento/valida-agendamento.component';
import { AlertErrorComponent } from './components/dialogs/alert-error/alert-error.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoAgendamentoComponent,
    AgendamentosComponent,
    ConfirmaAgendamentoComponent,
    ValidaAgendamentoComponent,
    AlertErrorComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
