import { Component } from '@angular/core';
import { Agendamento } from 'src/app/model/domain/Agendamento';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent {
  agendamentos: Agendamento[] = []
}
 