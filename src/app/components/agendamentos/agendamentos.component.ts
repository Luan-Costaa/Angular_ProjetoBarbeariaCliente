import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Agendamento } from 'src/app/model/domain/Agendamento';
import { AgendamentoServiceService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent {
  agendamentos: Agendamento[] = []

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private agendamentoService: AgendamentoServiceService,){

      this.agendamentos = agendamentoService.agendamentos
    }

    diasDaSemana = [ "Domingo", "Segunda-Feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]

    formatarData(data: Date){
     
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso o +1
      const ano = data.getFullYear();
  
      return `${dia}/${mes}/${ano}`;
    }
}
 