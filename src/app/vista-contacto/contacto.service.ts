import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacto } from './contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private urlEndpoint = 'https://inerxia-group.herokuapp.com/api/v1/contacto';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'} );

  constructor(private http: HttpClient) { }

  enviarMensaje(contacto: Contacto): Observable<any> {
    console.log('llega');
    console.log(contacto);
    return this.http.post<any>(this.urlEndpoint, contacto, {headers: this.httpHeaders});
  }

}
