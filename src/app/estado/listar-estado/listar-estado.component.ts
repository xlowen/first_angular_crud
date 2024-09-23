import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estado } from '../../shared';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrl: './listar-estado.component.css'
})
export class ListarEstadoComponent implements OnInit{
  estados : Estado[] = []

  constructor(private estadoService: EstadoService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  abrirModalEstado(estado: Estado) {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado){
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o estado: ${estado.nome}`)){
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }
}
