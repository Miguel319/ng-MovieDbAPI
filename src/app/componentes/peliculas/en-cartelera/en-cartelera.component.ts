import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Pelicula } from "src/app/modelos/pelicula.model";

@Component({
  selector: "app-en-cartelera",
  templateUrl: "./en-cartelera.component.html",
  styleUrls: ["./en-cartelera.component.css"]
})
export class EnCarteleraComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.obtenerPeliculasEnCartelera();
  }

  obtenerPeliculasEnCartelera() {
    this.peliculasService.obtenerPeliculasEnCartelera().subscribe(
      (res: Pelicula[]) => {
        this.peliculas = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
