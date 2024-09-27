import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SharedModule } from '../shared';
import { CidadeService } from './services/cidade.service';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    EditarCidadeComponent,
    InserirCidadeComponent,
    ListarCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgSelectModule
  ],
  providers: [
    CidadeService,
    provideNgxMask()
  ]
})
export class CidadeModule { }
