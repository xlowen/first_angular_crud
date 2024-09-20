import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from './services/endereco.service';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    EditarEnderecoComponent,
    InserirEnderecoComponent,
    ListarEnderecoComponent,
    ModalEnderecoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    EnderecoService,
    provideNgxMask()
  ]
})
export class EnderecoModule { }
