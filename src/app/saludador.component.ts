import { Component } from '@angular/core';

@Component({
  selector: 'sa-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent {
  nombre: string = 'Laura';

  cambioNombre(event: any) {
    // console.log('Event', event);
    this.nombre = event.target.value;
  }
}
