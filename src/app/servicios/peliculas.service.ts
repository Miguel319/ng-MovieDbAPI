import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Pelicula } from "../modelos/pelicula.model";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private apiKey: string = "054cbf2e2a38d79537414261f30140f8";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  /* private tURL =
    " https://api.themoviedb.org/3/movie/550?api_key=054cbf2e2a38d79537414261f30140f8";*/

  constructor(private http: HttpClient) {}

  private mapearPelicula(objPelicula: Object): Pelicula[] {
    const peliculas: Pelicula[] = [];

    for (let obj of objPelicula["results"]) {
      obj[
        "poster_path"
      ] = `http://image.tmdb.org/t/p/w300/${obj["poster_path"]}`;
      obj[
        "backdrop_path"
      ] = `http://image.tmdb.org/t/p/w300/${obj["poster_path"]}`;
      peliculas.push(obj);
    }
    return peliculas;
  }

  //En cartelera
  obtenerPeliculasEnCartelera() {
    const fechaActual = new Date();
    const mesActual =
      fechaActual.getMonth().toString().length === 1
        ? `0${fechaActual.getMonth() + 1}`
        : fechaActual.getMonth() + 1;

    const haceUnMes = `${fechaActual.getFullYear()}-${(
      Number(mesActual) - 1
    ).toString()}-${fechaActual.getDate()}`;

    const hoy = `${fechaActual.getFullYear()}-${mesActual}-${fechaActual.getDate()}`;

    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${haceUnMes}&primary_release_date.lte=${hoy}&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  //Populares
  obtenerPeliculasPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  //Populares más para niños
  obtenerPopularesEntreNinios() {
    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(this.mapearPelicula));
  }
}
