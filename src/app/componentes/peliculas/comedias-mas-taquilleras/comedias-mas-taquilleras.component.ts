import { Component, OnInit } from "@angular/core";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-comedias-mas-taquilleras",
  templateUrl: "./comedias-mas-taquilleras.component.html",
  styleUrls: ["./comedias-mas-taquilleras.component.css"]
})
export class ComediasMasTaquillerasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(
    private peliculasServicio: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerComediasMasTaquilleras();
  }

  obtenerComediasMasTaquilleras() {
    this.peliculasServicio
      .obtenerMejoresDramasDelAnio()
      .subscribe(res => (this.peliculas = res), err => console.log(err));
  }

  verDetalle(evento: any) {
    this.router.navigateByUrl(`peliculas/comedias-mas-taquilleras/${evento}`);
  }
}
