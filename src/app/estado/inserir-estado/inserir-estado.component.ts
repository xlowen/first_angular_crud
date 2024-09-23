import { Component, ViewChild } from '@angular/core';
import { Estado } from '../../shared';
import { EstadoService } from '../services/estado.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrl: './inserir-estado.component.css'
})
export class InserirEstadoComponent {
  @ViewChild('formEstado') formEstado! : NgForm;
  
  estado: Estado = new Estado();

  constructor(
    private estadoService: EstadoService,
    private router: Router,
  ){}

  inserir(): void {
    if(this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
