import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula.model';
import { PeliculasService } from '../../../servicios/peliculas.service';

@Component({
  selector: 'app-mejores-con-rating-r',
  templateUrl: './mejores-con-rating-r.component.html',
  styleUrls: ['./mejores-con-rating-r.component.css']
})
export class MejoresConRatingRComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.obtenerMejoresConRatingR();
  }

  obtenerMejoresConRatingR() {
    this.peliculasService.obtenerMejoresConRatingR().subscribe(
      (res: Pelicula[]) => this.peliculas = res,
      err => console.log(err)
    );
    }
}
