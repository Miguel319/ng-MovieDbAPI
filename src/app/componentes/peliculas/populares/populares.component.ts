import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-populares",
  templateUrl: "./populares.component.html",
  styleUrls: ["./populares.component.css"]
})
export class PopularesComponent implements OnInit {
  peliculas: Pelicula[] = [];
  imgPath = "image.tmdb.org/t/p/w300";

  constructor(
    private peliculaServicio: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerPopulares();
  }

  obtenerPopulares() {
    this.peliculaServicio.obtenerPopulares().subscribe(
      res => {
        this.peliculas = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  verDetalles(evento: any) {
    this.router.navigateByUrl(`peliculas/populares/detalles/${evento}`);
  }
}
