import { Component, OnInit, OnChanges, AfterViewInit } from "@angular/core";
import { PeliculasService } from "../../servicios/peliculas.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Pelicula } from "src/app/modelos/pelicula.model";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit, OnChanges {
  peliculas: Pelicula[];
  peliculaNombre: any;

  constructor(
    private peliculaServicio: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerDatos();
  }

  ngOnChanges() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.activatedRoute.paramMap.subscribe(
      res => (this.peliculaNombre = res.get("peliculaNombre"))
    );

    this.activatedRoute.url.subscribe(data =>
      this.peliculaServicio.buscar(this.peliculaNombre).subscribe(
        (res: Pelicula[]) => {
          this.peliculas = res;
          console.log(res);
        },
        err => console.log(err)
      )
    );
  }

  verDetalles(evento: any) {
    this.router.navigateByUrl(`peliculas/detalles/${evento}`);
  }
}
