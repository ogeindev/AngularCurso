import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string;

  constructor(public http: HttpClient) {
    this.url = environment.urlUsers + '/';
   }

   get(id: number | string): Promise<Usuario> {
     return this.http.get(this.url + id).toPromise() as Promise<Usuario>;
   }

   list(): Promise<Array<Usuario>> {
     return this.http.get(this.url).toPromise() as Promise<Array<Usuario>>;
   }

   create(data: Usuario): Promise<Usuario>{
     return this.http.post(this.url, data).toPromise() as Promise<Usuario>;
   }

   update(id: number | string, data: Usuario): Promise<Usuario>{
    return this.http.patch(this.url + id, data).toPromise() as Promise<Usuario>;
   }

   delete(id): Promise<Object> {
     return this.http.delete(this.url + id).toPromise();
   }
}

/* __CRUD__

Create --> POST
Read --> GET
Update --> PUT
Delete --> DELETE

*/
