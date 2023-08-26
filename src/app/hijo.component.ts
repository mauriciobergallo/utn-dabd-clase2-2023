import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sa-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() respuestaDePadre: string = '';
  @Output() preguntaParaPadre: EventEmitter<string> = 
    new EventEmitter();

  pregunta: string = '';

  onPregunta(event: any) {
    this.pregunta = event.target.value;
  }

  hacerPregunta() {
    this.preguntaParaPadre.emit(this.pregunta);
  }

  
}
