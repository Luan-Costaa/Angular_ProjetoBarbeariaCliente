import { Barbeiro } from './Barbeiro';
import { Horario } from './Horario';
import { Servico } from './Servico';
export class Agendamento{
  dataAgendamento: Date = new Date;
  horario: Horario = new Horario;
  cabeleireiro: Barbeiro = new Barbeiro;
  servicos: Servico[] = [];
  nome: string| null = ''
  telefone: string | null = ''

  constructor(){}

  totalServicos() {
    let total = 0.00;

    for (let i = 0; i < this.servicos.length; i++) {
        total += parseFloat(this.servicos[i].valor);
    }

    return total;
  }

  totalTempoServicos() {
    let total = "";

    let minutosTotais = 0


    for (let i = 0; i < this.servicos.length; i++) {
      minutosTotais += parseInt((this.servicos[i].tempo).split(':')[0]) * 60 + parseInt((this.servicos[i].tempo).split(':')[1])      
    }

    let horas = Math.floor(minutosTotais / 60);
    let minutos = Math.floor(minutosTotais % 60);

    total = horas + ":" + minutos

    console.log(minutosTotais)


    return total;
  }
}
