import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { HomeComponent } from "./componentes/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusquedaComponent,
    HomeComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
