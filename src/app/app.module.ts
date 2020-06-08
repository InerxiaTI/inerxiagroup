import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { VistaInicioComponent } from './vista-inicio/vista-inicio.component';
import { VistaAtributosComponent } from './vista-atributos/vista-atributos.component';
import { VistaNosotrosComponent } from './vista-nosotros/vista-nosotros.component';
import { VistaEquipoComponent } from './vista-equipo/vista-equipo.component';
import { VistaComentariosComponent } from './vista-comentarios/vista-comentarios.component';
import { VistaContactoComponent } from './vista-contacto/vista-contacto.component';
import { FooterComponent } from './footer/footer.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuLiComponent } from './menu-li/menu-li.component';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VistaInicioComponent,
    VistaAtributosComponent,
    VistaNosotrosComponent,
    VistaEquipoComponent,
    VistaComentariosComponent,
    VistaContactoComponent,
    FooterComponent,
    MenuLiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader ,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


