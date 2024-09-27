import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    data:{
      role: 'ADMIN, GERENTE, FUNC'
    }
  },
  { 
    path: 'pessoas',
    redirectTo: 'pessoas/listar',
  },
  { 
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE, FUNC'
    }
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE, FUNC'
    }
  },
  { 
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE, FUNC'
    }
  },
  {
    path: 'estados/novo',
    component: InserirEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, FUNC'
    }
  },
  {
    path: 'enderecos/novo',
    component: InserirEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE'
    }
  },
  {
    path: 'cidades/novo',
    component: InserirCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN'
    }
  },
  { 
    path: 'estados/listar',
    component: ListarEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, FUNC'
    }
  },{ 
    path: 'cidades/listar',
    component: ListarCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN'
    }
  },{ 
    path: 'enderecos/listar',
    component: ListarEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE'
    }
  },
  { 
    path: 'estados',
    redirectTo: 'estados/listar',
  },{ 
    path: 'cidades',
    redirectTo: 'cidades/listar',
  },{ 
    path: 'enderecos',
    redirectTo: 'enderecos/listar',
  },
  { 
    path: 'estados/editar/:id',
    component: EditarEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, FUNC'
    }
  },
  { 
    path: 'cidades/editar/:id',
    component: EditarCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN'
    }
  },
  { 
    path: 'enderecos/editar/:id',
    component: EditarEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
