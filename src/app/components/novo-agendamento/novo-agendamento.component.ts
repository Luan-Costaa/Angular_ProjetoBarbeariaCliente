import { AgendamentoServiceService } from '../../services/agendamento.service';
import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormArray} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Barbeiro } from 'src/app/model/domain/Barbeiro';
import { Servico } from 'src/app/model/domain/Servico';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.scss']
})



export class NovoAgendamentoComponent {
  idBarbeiro: string = '';
  barbeiros: Barbeiro[];

  dataAgenda: Date = new Date;
  diasDaSemana = [ "Domingo", "Segunda-Feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]
  diaSemana: string;

  servicos: Servico[] ;
  servicosSelecionados: FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private agendamentoService: AgendamentoServiceService)
  {
    this.dateAdapter.setLocale('pt-BR');
    this.diaSemana = this.diasDaSemana[this.dataAgenda.getDay()];

    this.barbeiros = agendamentoService.buscarBarbeiros();
    this.servicos = agendamentoService.buscarServicos();

    this.servicosSelecionados = this._formBuilder.group(this.buildServicos());

  }

  updateDayOfWeek(data: Date){
    this.dataAgenda = data;
    this.diaSemana = this.diasDaSemana[this.dataAgenda.getDay()];
  }

  alertaTeste(){
    console.log(this.servicosSelecionados.value)
    console.log("Teste")
  }


  /********************************************** */

  /*formulario: FormGroup = this._formBuilder.group({
    nome: ['', Validators.required],
    termos: [null],
    barbeiros: this.buildBarbeiros()
  });

  buildBarbeiros(){
    const values = this.barbeiros.map(v => new FormControl(false));
    return this._formBuilder.array(values);
  }

  get barbeirosFormArray() {
    return this.formulario.get('barbeiros') as FormArray;
  }
*/


  buildServicos() {
    const servicosForm = this.servicos.map(s => ({
      [s.nome]: false
    }));


    const initialServicosState = Object.assign({}, ...servicosForm);


    return(initialServicosState);
  }


  teste(){
    console.log(this.servicosSelecionados.value)
  }
}
