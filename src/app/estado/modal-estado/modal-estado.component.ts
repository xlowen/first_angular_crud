import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estado } from '../../shared';

@Component({
  selector: 'app-modal-estado',
  templateUrl: './modal-estado.component.html',
  styleUrl: './modal-estado.component.css'
})
export class ModalEstadoComponent {
  @Input() estado!: Estado;
  constructor(public activeModal: NgbActiveModal){}
}
