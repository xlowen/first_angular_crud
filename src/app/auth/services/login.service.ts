import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from '../../shared';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario{
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario : Usuario){
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: Login): Observable<Usuario | null>{
    let usu = new Usuario(1, login.login, login.login, login.senha, "FUNC");

    if(login.login == login.senha){
      if (login.login == "admin"){
        usu.perfil = "ADMIN";
      }
      else if(login.login =="gerente"){
        usu.perfil = "GERENTE";
      }
      return of(usu);
    }
    else {
      return of(null);
    }

  }

  logout(){
    delete localStorage[LS_CHAVE];
  }
}
