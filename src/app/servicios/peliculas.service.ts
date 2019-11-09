import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private apiKey: string = "054cbf2e2a38d79537414261f30140f8";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  /* private tURL =
    " https://api.themoviedb.org/3/movie/550?api_key=054cbf2e2a38d79537414261f30140f8";*/

  constructor(private http: HttpClient) {}

  //En cartelera
  obtenerPeliculasEnCartelera() {
    const fechaActual = new Date();
    const haceUnMes = `${fechaActual.getFullYear()}-${fechaActual.getMonth() -
      1}-${fechaActual.getDay()}`.toString();
    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${haceUnMes}&api_key=${this.apiKey}&primary_release_date.lte=${fechaActual}&language=es`;

    return this.http.get(url);
  }

  //Populares
  obtenerPeliculasPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url);
  }

  //Populares más para niños
  obtenerPopularesEntreNinios() {
    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.urlMovieDb}&language=es`;
    return this.http.get(url);
  }
}
