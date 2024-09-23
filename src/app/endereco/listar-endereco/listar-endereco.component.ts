import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from '../../shared';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrl: './listar-endereco.component.css'
})
export class ListarEnderecoComponent implements OnInit{
  enderecos : Endereco[] = [];

  constructor(private enderecoService: EnderecoService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  abrirModalEndereco(endereco: Endereco) {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco : Endereco){
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o endereco: ${endereco.rua}`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
