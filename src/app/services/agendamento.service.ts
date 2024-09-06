import { Injectable } from '@angular/core';
import { Barbeiro } from '../model/domain/Barbeiro';
import { Agendamento } from '../model/domain/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoServiceService {

  constructor() { }

  agendamentos: Agendamento[] = []

  adicionarAgendamento(agendamento: Agendamento){
    this.agendamentos.push(agendamento)
    //location.assign("/agendamentos")
  }

  buscarBarbeiros(){
    return [
      {id:"2", nome:"Ademilson", imgSrc:"../../../assets/images/barbeiro.jpg"},
      {id:"2", nome:"Matheus", imgSrc:"../../../assets/images/barbeiro.jpg"},
      {id:"2", nome:"Benailson", imgSrc:"../../../assets/images/barbeiro.jpg"}
    ]
  }

  buscarServicos(){
    return [
      {id:"1", nome:"Corte Degradê", valor:"35.00", tempo:"00:30"},
      {id:"2", nome:"Corte Maquina", valor:"20.00", tempo:"00:25"},
      {id:"3", nome:"Barba", valor:"15.00", tempo:"00:20"},
      {id:"4", nome:"Progressiva", valor:"90.00", tempo:"01:30"}
    ]
  }

  buscarServicosSelecionados(ids: string[]){
    let lista = [
      {id:"1", nome:"Corte Degradê", valor:"35.00", tempo:"00:30"},
      {id:"2", nome:"Corte Maquina", valor:"20.00", tempo:"00:25"},
      {id:"3", nome:"Barba", valor:"15.00", tempo:"00:20"},
      {id:"4", nome:"Progressiva", valor:"90.00", tempo:"01:30"}
    ]

    var new_list = []

    for(let i = 0 ; i > lista.length; i++){
      for(let j = 0 ; j > ids.length; j++){
        if (lista[i].id == ids[j]){
          new_list.push(lista[i])
          break
        }
      }
    }

    return new_list;
  }

  buscarHorariosDisponiveis(dataAgenda: Date){
    return[
      {id: "2", hora: "08:00", disponivel: true},
      {id: "3", hora: "09:00", disponivel: true},
      {id: "4", hora: "10:00", disponivel: true},
      {id: "5", hora: "15:00", disponivel: true},
    ]
  }
}
