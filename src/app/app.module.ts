import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { HomeComponent } from "./componentes/home/home.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";
import { AppRoutingModule } from "./routes";
import { ListaComponent } from "./componentes/peliculas/lista/lista.component";
import { EnCarteleraComponent } from './componentes/peliculas/en-cartelera/en-cartelera.component';
import { PopularesEntreNiniosComponent } from './componentes/peliculas/populares-entre-ninios/populares-entre-ninios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusquedaComponent,
    HomeComponent,
    PopularesComponent,
    ListaComponent,
    EnCarteleraComponent,
    PopularesEntreNiniosComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
