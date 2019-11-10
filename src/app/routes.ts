import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";
import { EnCarteleraComponent } from "./componentes/peliculas/en-cartelera/en-cartelera.component";
import { PopularesEntreNiniosComponent } from "./componentes/peliculas/populares-entre-ninios/populares-entre-ninios.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "peliculas/populares", component: PopularesComponent },
  { path: "peliculas/en-cartelera", component: EnCarteleraComponent },
  {
    path: "peliculas/populares-entre-ninios",
    component: PopularesEntreNiniosComponent
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
