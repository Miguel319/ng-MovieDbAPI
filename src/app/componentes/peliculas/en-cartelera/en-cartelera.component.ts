import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-en-cartelera",
  templateUrl: "./en-cartelera.component.html",
  styleUrls: ["./en-cartelera.component.css"]
})
export class EnCarteleraComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerPeliculasEnCartelera();
  }

  obtenerPeliculasEnCartelera() {
    this.peliculasService.obtenerEnCartelera().subscribe(
      (res: Pelicula[]) => {
        this.peliculas = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  verDetalles(evento: any) {
    this.router.navigateByUrl(`peliculas/en-cartelera/detalles/${evento}`);
  }
}
