import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-mejores-del-anio",
  templateUrl: "./mejores-del-anio.component.html",
  styleUrls: ["./mejores-del-anio.component.css"]
})
export class MejoresDelAnioComponent implements OnInit {
  peliculas: Pelicula[] = [];
  anioActual: number;

  constructor(
    private peliculasServicio: PeliculasService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.anioActual = new Date().getFullYear();
    this.obtenerMejoresDelAnio();
  }

  obtenerMejoresDelAnio() {
    this.peliculasServicio
      .obtenerMejoresDelAnio()
      .subscribe(
        (res: Pelicula[]) => (this.peliculas = res),
        err => console.log(err)
      );
  }

  verDetalles(evento: any) {
    this.router.navigateByUrl(`peliculas/mejores-del-anio/detalles/${evento}`);
  }
  
}
