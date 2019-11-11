import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula.model';
import { PeliculasService } from '../../../servicios/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mejores-dramas-del-anio',
  templateUrl: './mejores-dramas-del-anio.component.html',
  styleUrls: ['./mejores-dramas-del-anio.component.css']
})
export class MejoresDramasDelAnioComponent implements OnInit {
  peliculas: Pelicula[] = [];
  anioActual: number;

  constructor(
    private peliculasServicio: PeliculasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.anioActual = new Date().getFullYear();
    this.obtenerMejoresDramasDelAnio();
  }

  obtenerMejoresDramasDelAnio() {
    this.peliculasServicio.obtenerMejoresDramasDelAnio()
      .subscribe(
        res => this.peliculas = res,
        err => console.log(err)
      );
  }

  verDetalle(evento: any) {
    this.router.navigateByUrl(`peliculas/mejores-dramas-del-anio/${evento}`);
  }
}
