import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoAgendamentoComponent } from './components/novo-agendamento/novo-agendamento.component';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';

const routes: Routes = [
  {path:"novo-agendamento", component: NovoAgendamentoComponent},
  {path:"minha-conta", component: MinhaContaComponent},
  {path:"agendamentos", component: AgendamentosComponent},
  {path:"", component: AgendamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
