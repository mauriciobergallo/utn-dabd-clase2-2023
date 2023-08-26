import { Component } from '@angular/core';

@Component({
  selector: 'sa-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  respuestaParaHijo: string = '????';
  preguntaHechaPorHijo: string = '';

  onReponder(event: string) {
    this.preguntaHechaPorHijo = event;
    this.respuestaParaHijo = 'Preguntale a tu mama';
  }
}
