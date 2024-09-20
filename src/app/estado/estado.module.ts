import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EstadoService } from './services/estado.service';



@NgModule({
  declarations: [
    EditarEstadoComponent,
    InserirEstadoComponent,
    ListarEstadoComponent,
    ModalEstadoComponent
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
    EstadoService,
    provideNgxMask()
  ]
})
export class EstadoModule { }
