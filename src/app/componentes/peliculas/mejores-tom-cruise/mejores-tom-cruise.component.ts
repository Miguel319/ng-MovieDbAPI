import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../../../modelos/pelicula.model";
import { PeliculasService } from "../../../servicios/peliculas.service";

@Component({
  selector: "app-mejores-tom-cruise",
  templateUrl: "./mejores-tom-cruise.component.html",
  styleUrls: ["./mejores-tom-cruise.component.css"]
})
export class MejoresTomCruiseComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaServicio: PeliculasService) {}

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
}
