import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { PopularesComponent } from "./componentes/peliculas/populares/populares.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "peliculas/populares", component: PopularesComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
