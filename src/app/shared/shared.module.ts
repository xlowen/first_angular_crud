import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CaixaAltaPipe } from '../shared/pipes/caixa-alta.pipe';
import { NumericoDirective, MinimoValidatorDirective } from './directives';


@NgModule({
  declarations: [
      CaixaAltaPipe,
      NumericoDirective,
      MinimoValidatorDirective,
    ],
  imports: [
    CommonModule,
  ],
  exports: [
    NumericoDirective,
    MinimoValidatorDirective,
    CaixaAltaPipe
  ]
})
export class SharedModule { }
