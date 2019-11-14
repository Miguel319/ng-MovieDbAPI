import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";
import { BusquedaComponent } from "./componentes/peliculas/busqueda/busqueda.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";
import { EnCarteleraComponent } from "./componentes/peliculas/en-cartelera/en-cartelera.component";
import { PopularesEntreNiniosComponent } from "./componentes/peliculas/populares-entre-ninios/populares-entre-ninios.component";
import { MejoresDelAnioComponent } from "./componentes/peliculas/mejores-del-anio/mejores-del-anio.component";
import { MejoresTomCruiseComponent } from "./componentes/peliculas/mejores-tom-cruise/mejores-tom-cruise.component";
import { MejoresDramasDelAnioComponent } from "./componentes/peliculas/mejores-dramas-del-anio/mejores-dramas-del-anio.component";
import { ComediasMasTaquillerasComponent } from "./componentes/peliculas/comedias-mas-taquilleras/comedias-mas-taquilleras.component";
import { MejoresConRatingRComponent } from "./componentes/peliculas/mejores-con-rating-r/mejores-con-rating-r.component";
import { DetallesComponent } from './componentes/peliculas/detalles/detalles.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "peliculas/busqueda", component: BusquedaComponent },
  { path: "peliculas/busqueda/:peliculaNombre", component: BusquedaComponent },
  { path: 'peliculas/busqueda/detalles/:id', component: DetallesComponent },
  { path: "peliculas/populares", component: PopularesComponent },
  { path: "peliculas/populares/detalles/:id", component: DetallesComponent },
  { path: "peliculas/en-cartelera", component: EnCarteleraComponent },
  { path: "peliculas/en-cartelera/detalles/:id", component: DetallesComponent },
  { path: "peliculas/mejores-del-anio", component: MejoresDelAnioComponent },
  { path: "peliculas/mejores-del-anio/detalles/:id", component: DetallesComponent },
  {
    path: "peliculas/mejores-dramas-del-anio",
    component: MejoresDramasDelAnioComponent
  },
  {
    path: "peliculas/mejores-dramas-del-anio/detalles/:id",
    component: DetallesComponent
  },
  {
    path: "peliculas/mejores-de-tom-cruise",
    component: MejoresTomCruiseComponent
  },
  {
    path: "peliculas/mejores-de-tom-cruise/detalles/:id",
    component: DetallesComponent
  },
  {
    path: "peliculas/populares-entre-ninios",
    component: PopularesEntreNiniosComponent
  },
  {
    path: "peliculas/populares-entre-ninios/detalles/:id",
    component: DetallesComponent
  },
  {
    path: "peliculas/comedias-mas-taquilleras",
    component: ComediasMasTaquillerasComponent
  },
  {
    path: "peliculas/comedias-mas-taquilleras/detalles/:id",
    component: DetallesComponent
  },
  {
    path: "peliculas/mejores-con-rating-r",
    component: MejoresConRatingRComponent
  },
  {
    path: "peliculas/mejores-con-rating-r/detalles/:id",
    component: DetallesComponent
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
