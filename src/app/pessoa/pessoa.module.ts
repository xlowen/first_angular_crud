import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    NumericoDirective,
    EditarPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
