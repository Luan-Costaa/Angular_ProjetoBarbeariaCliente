import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoAgendamentoComponent } from './components/novo-agendamento/novo-agendamento.component';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:"novo-agendamento", component: NovoAgendamentoComponent},
  {path:"agendamentos", component: AgendamentosComponent},
  {path:"", component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
