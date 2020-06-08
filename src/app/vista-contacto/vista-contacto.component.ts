import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';


@Component({
  selector: 'app-vista-contacto',
  templateUrl: './vista-contacto.component.html',
  styleUrls: ['./vista-contacto.component.css']
})
export class VistaContactoComponent implements OnInit {

  public objContacto: Contacto = new Contacto();

  constructor(public translate: TranslateService, private contactoService: ContactoService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  public enviarMensaje(): void {
    console.log('click');
    console.log(this.objContacto);
    this.contactoService.enviarMensaje(this.objContacto).subscribe(
      response => alert('hola')
    );
  }

  ngOnInit(): void {
  }

}
