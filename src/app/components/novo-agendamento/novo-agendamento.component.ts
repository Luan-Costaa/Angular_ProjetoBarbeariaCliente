import { AgendamentoServiceService } from '../../services/agendamento.service';
import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormArray} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Barbeiro } from 'src/app/model/domain/Barbeiro';
import { Servico } from 'src/app/model/domain/Servico';
import { ConfirmaAgendamentoComponent } from '../dialogs/confirma-agendamento/confirma-agendamento.component';
import { AgendamentoRequest } from 'src/app/model/domain/AgendamentoRequest';
import { Horario } from 'src/app/model/domain/Horario';
import { Agendamento } from 'src/app/model/domain/Agendamento';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.scss']
})



export class NovoAgendamentoComponent {
  hoje: Date;
  idBarbeiro: Barbeiro = new Barbeiro;
  barbeiros: Barbeiro[];
  horariosDisponiveis: Horario[] = [];


  dataFormatada: string = this.formatarData(new Date)
  dataAgenda: Date = new Date;
  diasDaSemana = [ "Domingo", "Segunda-Feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]
  diaSemana: string;

  servicos: Servico[] ;
  servicosSelecionados: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private agendamentoService: AgendamentoServiceService,
    private dialog: MatDialog)
  {
    this.hoje = new Date;
    this.dateAdapter.setLocale('pt-BR');
    this.diaSemana = this.diasDaSemana[this.dataAgenda.getDay()];

    this.barbeiros = agendamentoService.buscarBarbeiros();
    this.servicos = agendamentoService.buscarServicos();

    this.servicosSelecionados = this._formBuilder.group(this.buildServicos());


  }

  listarHorarios(data: Date){
    this.dataAgenda = data;
    this.diaSemana = this.diasDaSemana[this.dataAgenda.getDay()];
    this.dataFormatada = this.formatarData(data);
    this.horariosDisponiveis = this.agendamentoService.buscarHorariosDisponiveis(data);

  }

  formatarData(data: Date){
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso o +1
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  buildServicos() {
    const servicosForm = this.servicos.map(s => ({
      [s.id]: false
    }));


    const initialServicosState = Object.assign({}, ...servicosForm);


    return(initialServicosState);
  }



  openDialog(horario: Horario): void {
    let agendamento: Agendamento = new Agendamento;

    agendamento.cabeleireiro = this.idBarbeiro;
    agendamento.dataAgendamento = this.dataAgenda;
    agendamento.horario = horario;
    //agendamento.servicos = this.listarServicosSelecionados();
    this.listarServicosSelecionados();

    const dialogRef = this.dialog.open(ConfirmaAgendamentoComponent, {
      data: {nome:"Luan"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(".")
    });
  }

  listarServicosSelecionados() {
    let idsSelecionados = this.filtrarServicosSelecionados();

    let servicos = [];

    for( let i in idsSelecionados){
      for(let j in this.servicos){
        if(parseInt(this.servicos[j].id) == idsSelecionados[i]){
          console.log(this.servicos[j]);
        }
      }
    }
    return idsSelecionados;
  }

  filtrarServicosSelecionados(){
    const servicosSelecionados = this.servicosSelecionados.value;
    const idsSelecionados: number[] = [];

    for (const chave in servicosSelecionados) {
      if (servicosSelecionados[chave]) {
        idsSelecionados.push(parseInt(chave, 10));
      }
    }

    return idsSelecionados;
  }


}
