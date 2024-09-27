import { Component, ViewChild, OnInit } from '@angular/core';
import { Cidade, Estado } from '../../shared';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EstadoService } from '../../estado/services/estado.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrl: './editar-cidade.component.css'
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade! : NgForm;

  cidade : Cidade = new Cidade();
  estados : Estado[] = []

  constructor (
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscaPorId(id);
    if (res!== undefined)
      this.cidade = res;
    else
      throw new Error("Cidade não encontrada: id= " + id);
  }
  atualizar(): void {
    if (this.formCidade.form.valid){
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }

  
}
