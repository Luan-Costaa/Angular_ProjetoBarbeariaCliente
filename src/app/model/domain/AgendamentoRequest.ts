export class AgendamentoRequest{
  dataAgendamento: Date = new Date;
  clienteId: string = '';
  cabeleireiroId: string = '';
  servicosIds: string[] = [];
  idHoraAgendada: string = '';

  constructor(){}
}
