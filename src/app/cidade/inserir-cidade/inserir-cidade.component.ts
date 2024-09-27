import { Component, OnInit, ViewChild } from '@angular/core';
import { Cidade, Estado } from '../../shared';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../services/cidade.service';
import { Router } from '@angular/router';
import { EstadoService } from '../../estado/services/estado.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrl: './inserir-cidade.component.css'
})
export class InserirCidadeComponent implements OnInit{
  @ViewChild('formCidade') formCidade! : NgForm;
  estados: Estado[] = [];
  cidade: Cidade = new Cidade();

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
  }

  inserir(): void {
    if(this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
