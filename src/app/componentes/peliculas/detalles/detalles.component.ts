import { Component, OnInit, AfterContentInit } from "@angular/core";
import { Pelicula } from "../../../modelos/pelicula.model";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { ActivatedRoute } from "@angular/router";
import { PeliculaDetalle } from "../../../modelos/pelicula-detalle.model";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["./detalles.component.css"]
})
export class DetallesComponent implements OnInit {
  pelicula: PeliculaDetalle;

  constructor(
    private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.obtenerDatosDePelicula();
  }

  estaVacio(pelicula: Pelicula, propiedad: string) {
    return pelicula[propiedad] === 0 || pelicula[propiedad] === ""
      ? true
      : false;
  }

  obtenerDatosDePelicula() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    console.log(id);

    this.peliculasService.obtenerDetalles(id).subscribe(
      (res: PeliculaDetalle) => {
        console.log(res);

        this.pelicula = res;
        this.pelicula.poster_path = res.poster_path;
        console.log(this.pelicula.poster_path);
      },
      err => console.log(err)
    );
  }
}
