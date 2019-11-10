import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Pelicula } from "../modelos/pelicula.model";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private fechaActual = new Date();

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
  obtenerEnCartelera() {
    const mesActual =
      this.fechaActual.getMonth().toString().length === 1
        ? `0${this.fechaActual.getMonth() + 1}`
        : this.fechaActual.getMonth() + 1;

    const haceUnMes = `${this.fechaActual.getFullYear()}-${(
      Number(mesActual) - 1
    ).toString()}-${this.fechaActual.getDate()}`;

    const hoy = `${this.fechaActual.getFullYear()}-${mesActual}-${this.fechaActual.getDate()}`;

    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${haceUnMes}&primary_release_date.lte=${hoy}&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  //Populares
  obtenerPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  //Populares más para niños
  obtenerPopularesEntreNinios() {
    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  //Mejores del año actual
  obtenerMejoresDelAnio() {
    const url = `${this.urlMovieDb}/discover/movie?primary_release_year=${this.fechaActual.getFullYear()}&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  //Mejores películas de ciencia ficción en las que ha estado Tom Cruise
  obtenerMejoresTomCruise() {
    const url = `${this.urlMovieDb}/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  obtenerMejoresDramasDelAnio() {
    const url = `${this.urlMovieDb}/discover/movie?with_genres=18&primary_release_year=${this.fechaActual.getFullYear()}$&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  obtenerComediasMasTaquilleras() {
    const url = `${this.urlMovieDb}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  obtenerMejoresConRatingR() {
    const url = `${this.urlMovieDb}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;
    
    return this.http.get(url).pipe(map(this.mapearPelicula));
  }
}
