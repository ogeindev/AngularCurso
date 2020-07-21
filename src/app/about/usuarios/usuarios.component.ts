import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'cas-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userID: string;
  user: Usuario;
  newUser: Usuario;
  msg: string;

  constructor(public userSrv: UsersService) {

  }

  ngOnInit(): void {
    this.user = new Usuario();
    this.newUser = new Usuario();
  }

  onRead() {
    if (!this.userID) {
      return;
    }
    this.userSrv.get(this.userID)
      .then(
        data => {
          this.user = data;
          this.newUser = data;
        }
      ).catch(error => {
        console.log(error);
        this.msg = `El usuario ${this.userID} no existe`;
      })
  }
  onNew() {
    if (!this.newUser.name) {
      return;
    }
    this.userSrv.create(this.newUser)
      .then(data => this.user = data)
  }

  onChange() {
    if (!this.userID) {
      return;
    } else if (this.newUser.name || this.newUser.mail) {
      this.userSrv.update(this.userID, this.newUser)
        .then(data => this.user = data)
    }
  }
  onDelete() {
    if (!this.userID) {
      return;
    }
    this.userSrv.delete(this.userID)
      .then(data => this.onRead());

  }
}
