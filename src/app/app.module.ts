import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoaModule } from './pessoa/pessoa.module';

import { SharedModule } from './shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CidadeModule } from './cidade/cidade.module';
import { EstadoModule } from './estado/estado.module';
import { EnderecoModule } from './endereco/endereco.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PessoaModule,
    CidadeModule,
    EstadoModule,
    NgbModule,
    EnderecoModule,
    NgSelectModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
