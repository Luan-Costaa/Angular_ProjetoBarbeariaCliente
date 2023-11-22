import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirma-agendamento',
  templateUrl: './confirma-agendamento.component.html',
  styleUrls: ['./confirma-agendamento.component.scss']
})
export class ConfirmaAgendamentoComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmaAgendamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){}
}
