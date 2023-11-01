import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoAgendamentoComponent } from './components/novo-agendamento/novo-agendamento.component';

const routes: Routes = [
  {path:"novo-agendamento", component: NovoAgendamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
