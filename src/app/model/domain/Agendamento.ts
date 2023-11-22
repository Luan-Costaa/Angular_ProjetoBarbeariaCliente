import { Barbeiro } from './Barbeiro';
import { Horario } from './Horario';
import { Servico } from './Servico';
export class Agendamento{
  dataAgendamento: Date = new Date;
  horario: Horario = new Horario;
  cabeleireiro: Barbeiro = new Barbeiro;
  servicos: Servico[] = [];

  constructor(){}
}
