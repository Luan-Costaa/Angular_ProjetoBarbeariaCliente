import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-valida-agendamento',
  templateUrl: './valida-agendamento.component.html',
  styleUrls: ['./valida-agendamento.component.scss']
})
export class ValidaAgendamentoComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: string,){

  }

}
