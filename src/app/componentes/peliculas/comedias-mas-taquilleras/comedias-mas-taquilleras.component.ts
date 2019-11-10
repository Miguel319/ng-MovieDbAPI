import { Component, OnInit } from "@angular/core";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { PeliculasService } from "../../../servicios/peliculas.service";

@Component({
  selector: "app-comedias-mas-taquilleras",
  templateUrl: "./comedias-mas-taquilleras.component.html",
  styleUrls: ["./comedias-mas-taquilleras.component.css"]
})
export class ComediasMasTaquillerasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasServicio: PeliculasService) {}

  ngOnInit() {
    this.obtenerComediasMasTaquilleras();
  }

  obtenerComediasMasTaquilleras() {
    this.peliculasServicio
      .obtenerMejoresDramasDelAnio()
      .subscribe(res => (this.peliculas = res), err => console.log(err));
  }
}
