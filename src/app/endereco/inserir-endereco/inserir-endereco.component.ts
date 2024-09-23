import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from '../../shared';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrl: './inserir-endereco.component.css'
})
export class InserirEnderecoComponent {
  @ViewChild('formEndereco') formEndereco! : NgForm;
  endereco : Endereco = new Endereco();

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  inserir(): void {
    if(this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
