import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { HomeComponent } from "./componentes/home/home.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";
import { AppRoutingModule } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusquedaComponent,
    HomeComponent,
    PopularesComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
