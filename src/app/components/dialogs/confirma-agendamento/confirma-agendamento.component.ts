import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Agendamento } from 'src/app/model/domain/Agendamento';
import { Servico } from 'src/app/model/domain/Servico';
import { AgendamentoServiceService } from 'src/app/services/agendamento.service';
import { ValidaAgendamentoComponent } from '../valida-agendamento/valida-agendamento.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-confirma-agendamento',
  templateUrl: './confirma-agendamento.component.html',
  styleUrls: ['./confirma-agendamento.component.scss']
})
export class ConfirmaAgendamentoComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmaAgendamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Agendamento,
    private agendamentoService: AgendamentoServiceService,
    private dialog: MatDialog,
    private router: Router
    ){
      
    
    }

    
    diasDaSemana = [ "Domingo", "Segunda-Feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]

    dataSemana =  this.diasDaSemana[this.data.dataAgendamento.getDay()]


    dataFormatada = this.formatarData(this.data.dataAgendamento)

    telFormatado: string = this.formatarTelefone(this.data.telefone)

    formatarTelefone( fone: string | null){
      if (fone != null){
        return "("
      + fone[0] + fone[1] + ") " + fone[2] + " " +
      fone[3] + fone[4] + fone[5] + fone[6] + "-" +
      fone[7] + fone[8] + fone[9] + fone[10] 
      }else{
        return ""
      }
      
    }

    //tempoTotal = this.getTempoTotal()
    //valorTotal = this.getValorTotal()

    formatarData(data: Date){
     
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso o +1
      const ano = data.getFullYear();
  
      return `${dia}/${mes}/${ano}`;
    }

    confirmarAgendamento(){
      this.agendamentoService.adicionarAgendamento(this.data)
      
      const dialogRef = this.dialog.open(ValidaAgendamentoComponent, {
        data: this.dataFormatada
      })

      // Ouvir o fechamento do diálogo
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) { // Se o botão "Visualizar" foi clicado
          this.router.navigate(['/agendamentos']); // Redirecionar para /agendamentos
        }
      });
    }
    
}
