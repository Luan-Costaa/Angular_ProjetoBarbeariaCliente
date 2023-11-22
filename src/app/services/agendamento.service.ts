import { Injectable } from '@angular/core';
import { Barbeiro } from '../model/domain/Barbeiro';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoServiceService {

  constructor() { }

  buscarBarbeiros(){
    return [
      {id:"2", nome:"Ademilson", imgSrc:"https://drive.google.com/uc?id=16HxkOezcFZl5cI38y-XEKuruV3AJ0Vx5"},
      {id:"2", nome:"Matheus", imgSrc:"https://drive.google.com/uc?id=16HxkOezcFZl5cI38y-XEKuruV3AJ0Vx5"},
      {id:"2", nome:"Benailson", imgSrc:"https://drive.google.com/uc?id=16HxkOezcFZl5cI38y-XEKuruV3AJ0Vx5"}
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

  buscarHorariosDisponiveis(dataAgenda: Date){
    return[
      {id: "2", hora: "08:00", disponivel: true},
      {id: "3", hora: "09:00", disponivel: true},
      {id: "4", hora: "10:00", disponivel: true},
      {id: "5", hora: "15:00", disponivel: true},
    ]
  }
}
