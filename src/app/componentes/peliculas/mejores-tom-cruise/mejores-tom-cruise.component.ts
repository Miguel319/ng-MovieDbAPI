import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../../../modelos/pelicula.model";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-mejores-tom-cruise",
  templateUrl: "./mejores-tom-cruise.component.html",
  styleUrls: ["./mejores-tom-cruise.component.css"]
})
export class MejoresTomCruiseComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(
    private peliculaServicio: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerMejoresTomCruise();
  }

  //Mejores películas de ciencia ficción en las que ha estado Tom Cruise
  obtenerMejoresTomCruise() {
    this.peliculaServicio
      .obtenerMejoresTomCruise()
      .subscribe(
        (res: Pelicula[]) => (this.peliculas = res),
        err => console.log(err)
      );
  }

  verDetalles(evento: any) {
    this.router.navigateByUrl(`peliculas/mejores-de-tom-cruise/detalles/${evento}`);
  }
}
