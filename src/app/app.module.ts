import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { BusquedaComponent } from "./componentes/peliculas/busqueda/busqueda.component";
import { HomeComponent } from "./componentes/home/home.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";
import { AppRoutingModule } from "./routes";
import { EnCarteleraComponent } from "./componentes/peliculas/en-cartelera/en-cartelera.component";
import { PopularesEntreNiniosComponent } from "./componentes/peliculas/populares-entre-ninios/populares-entre-ninios.component";
import { MejoresDelAnioComponent } from "./componentes/peliculas/mejores-del-anio/mejores-del-anio.component";
import { MejoresTomCruiseComponent } from "./componentes/peliculas/mejores-tom-cruise/mejores-tom-cruise.component";
import { MejoresDramasDelAnioComponent } from "./componentes/peliculas/mejores-dramas-del-anio/mejores-dramas-del-anio.component";
import { ComediasMasTaquillerasComponent } from "./componentes/peliculas/comedias-mas-taquilleras/comedias-mas-taquilleras.component";
import { MejoresConRatingRComponent } from "./componentes/peliculas/mejores-con-rating-r/mejores-con-rating-r.component";
import { DetallesComponent } from "./componentes/peliculas/detalles/detalles.component";
import { PeliculaTarjetaComponent } from "./componentes/peliculas/pelicula-tarjeta/pelicula-tarjeta.component";
import { DuracionPipe } from "./pipes/duracion.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusquedaComponent,
    HomeComponent,
    PopularesComponent,
    EnCarteleraComponent,
    PopularesEntreNiniosComponent,
    MejoresDelAnioComponent,
    MejoresTomCruiseComponent,
    MejoresDramasDelAnioComponent,
    ComediasMasTaquillerasComponent,
    MejoresConRatingRComponent,
    DetallesComponent,
    PeliculaTarjetaComponent,
    DuracionPipe
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
