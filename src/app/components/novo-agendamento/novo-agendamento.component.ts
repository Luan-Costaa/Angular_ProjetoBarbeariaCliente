import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.scss']
})
export class NovoAgendamentoComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;


  constructor(private _formBuilder: FormBuilder) {}
}
