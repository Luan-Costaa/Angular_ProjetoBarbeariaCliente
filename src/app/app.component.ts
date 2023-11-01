import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BarbeariaCliente';
  titulo = "Agendamentos";

  alterarTituloToolbar(titulo: string){
    this.titulo = titulo;
  }
}
