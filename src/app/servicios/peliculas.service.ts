import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Pelicula } from "../modelos/pelicula.model";
import { PeliculaDetalle } from "../modelos/pelicula-detalle.model";

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

  // Mapeo del resultado que retorna la petición al modelo Película
  private mapearPeliculas(objPelicula: Object): Pelicula[] {
    const peliculas: Pelicula[] = [];

    for (let obj of objPelicula["results"]) {
      if (obj["poster_path"] === null || obj["poster_path"] === undefined) {
        obj["poster_path"] = "../../assets/imgs/no image.png";
        obj["backdrop_path"] = "../../assets/imgs/no image.png";
      } else {
        obj[
          "poster_path"
        ] = `http://image.tmdb.org/t/p/w300/${obj["poster_path"]}`;
        obj[
          "backdrop_path"
        ] = `http://image.tmdb.org/t/p/w300/${obj["poster_path"]}`;
      }

      peliculas.push(obj);
    }

    return peliculas;
  }

  // Mapeo detalles de película dada en base al objeto que retorna la petición
  private mapearPelicula(objPelicula: PeliculaDetalle) {
    let peliculaDetalles: PeliculaDetalle = { ...objPelicula };

    if (!objPelicula.backdrop_path.startsWith("h")) {
      peliculaDetalles.backdrop_path = `http://image.tmdb.org/t/p/w300/${objPelicula.backdrop_path}`;
      peliculaDetalles.poster_path = `http://image.tmdb.org/t/p/w300/${objPelicula.poster_path}`;
    }

    if (
      objPelicula.poster_path === null ||
      objPelicula.poster_path === undefined
    ) {
      peliculaDetalles.poster_path = "../../assets/imgs/no image.png";
      peliculaDetalles.backdrop_path = "../../assets/imgs/no image.png";
    }

    return objPelicula === null || objPelicula === undefined
      ? {}
      : peliculaDetalles;
  }

  // En cartelera
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

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Populares
  obtenerPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Populares más para niños
  obtenerPopularesEntreNinios() {
    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Mejores del año actual
  obtenerMejoresDelAnio() {
    const url = `${
      this.urlMovieDb
    }/discover/movie?primary_release_year=${this.fechaActual.getFullYear()}&sort_by=vote_average.desc&api_key=${
      this.apiKey
    }&language=es`;

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Mejores películas de ciencia ficción en las que ha estado Tom Cruise
  obtenerMejoresTomCruise() {
    const url = `${this.urlMovieDb}/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Mejores películas del año
  obtenerMejoresDramasDelAnio() {
    const url = `${
      this.urlMovieDb
    }/discover/movie?with_genres=18&primary_release_year=${this.fechaActual.getFullYear()}$&api_key=${
      this.apiKey
    }&language=es`;

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Películas más taquilleras
  obtenerComediasMasTaquilleras() {
    const url = `${this.urlMovieDb}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Mejores películas con rating R
  obtenerMejoresConRatingR() {
    const url = `${this.urlMovieDb}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }

  // Detalles de películas
  obtenerDetalles(id: number | string) {
    const url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(map(this.mapearPelicula));
  }

  // Buscar película por nombre
  buscar(peliculaNombre: string) {
    const url = `${this.urlMovieDb}/search/movie?include_adult=false&page=1&query=${peliculaNombre}&language=es&api_key=${this.apiKey}`;

    return this.http.get(url).pipe(map(this.mapearPeliculas));
  }
}
