import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { Agendamento } from 'src/app/model/domain/Agendamento';
import { AgendamentoServiceService } from 'src/app/services/agendamento.service';
import { AlertErrorComponent } from '../dialogs/alert-error/alert-error.component';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent {
  agendamentos: Agendamento[] = []
  clienteTelefoneFormControl = new FormControl('', [Validators.required]);

  formIsValid() {
    return this.clienteTelefoneFormControl.valid;
  }

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private agendamentoService: AgendamentoServiceService,
    private dialog: MatDialog,
    private router: Router){

      this.agendamentos = []
    }

    diasDaSemana = [ "Domingo", "Segunda-Feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]

    formatarData(data: Date){
     
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso o +1
      const ano = data.getFullYear();
  
      return `${dia}/${mes}/${ano}`;
    }

    buscar_agendamentos(){
      var telefone = this.clienteTelefoneFormControl.value?.toString();
      if (!telefone) {
        telefone = ""
      }

      this.agendamentos = this.agendamentoService.buscarAgendamentoPorTelefone(telefone)



      if (this.agendamentos.length == 0){
        const dialogRef = this.dialog.open(AlertErrorComponent, {
          data: telefone
        })
      }

      

      // Ouvir o fechamento do diálogo
      //dialogRef.afterClosed().subscribe(result => {
      //  if (result === true) { // Se o botão "Visualizar" foi clicado
      //    this.router.navigate(['/agendamentos']); // Redirecionar para /agendamentos
      //  }
      //});
    }
}
 