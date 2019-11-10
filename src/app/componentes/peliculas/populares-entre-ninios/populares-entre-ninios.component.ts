import { Component, OnInit } from "@angular/core";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { PeliculasService } from "../../../servicios/peliculas.service";

@Component({
  selector: "app-populares-entre-ninios",
  templateUrl: "./populares-entre-ninios.component.html",
  styleUrls: ["./populares-entre-ninios.component.css"]
})
export class PopularesEntreNiniosComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaServicio: PeliculasService) {}

  ngOnInit() {
    this.obtenerPopularesEntreNiniios();
  }

  obtenerPopularesEntreNiniios() {
    this.peliculaServicio
      .obtenerPopularesEntreNinios()
      .subscribe(
        (res: Pelicula[]) => (this.peliculas = res),
        err => console.log(err)
      );
  }
}
