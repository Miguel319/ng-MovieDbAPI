import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";
import { EnCarteleraComponent } from "./componentes/peliculas/en-cartelera/en-cartelera.component";
import { PopularesEntreNiniosComponent } from "./componentes/peliculas/populares-entre-ninios/populares-entre-ninios.component";
import { MejoresDelAnioComponent } from "./componentes/pelicula/mejores-del-anio/mejores-del-anio.component";
import { MejoresTomCruiseComponent } from './componentes/peliculas/mejores-tom-cruise/mejores-tom-cruise.component';
import { MejoresDramasDelAnioComponent } from './componentes/peliculas/mejores-dramas-del-anio/mejores-dramas-del-anio.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "peliculas/populares", component: PopularesComponent },
  { path: "peliculas/en-cartelera", component: EnCarteleraComponent },
  { path: "peliculas/mejores-del-anio", component: MejoresDelAnioComponent },
  {
    path: "peliculas/mejores-dramas-del-anio",
    component: MejoresDramasDelAnioComponent
  },
  {
    path: "peliculas/mejores-de-tom-cruise",
    component: MejoresTomCruiseComponent
  },

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
