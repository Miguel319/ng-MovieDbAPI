import { Injectable } from "@angular/core";
import { Categoria } from "../modelos/categoria.model";

@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  private categorias: Categoria[];

  constructor() {}

  crearCategorias(): Categoria[] {
    this.categorias = [
      {
        id: 1,
        titulo: "Populares",
        descripcion: "Filmes más conocidos y seguidos del momento.",
        imagenRuta: "../../assets/imgs/populares.jpg",
        redireccion: "peliculas/populares"
      },
      {
        id: 2,
        titulo: "En cartelera",
        descripcion: "Películas que están actualmente en los cines.",
        imagenRuta: "../../assets/imgs/en-cartelera.jpg",
        redireccion: "peliculas/en-cartelera"
      },
      {
        id: 3,
        titulo: "Populares entre niños",
        descripcion: "Películas más admiradas y conocidas entre los pequeños.",
        imagenRuta: "../../assets/imgs/populares-entre-ninios.jpg",
        redireccion: "peliculas/populares-entre-ninios"
      },
      {
        id: 4,
        titulo: "Películas del año",
        descripcion: "Películas con mayor valoración del presente año.",
        imagenRuta: "../../assets/imgs/mejores-del-anio.png",
        redireccion: "peliculas/mejores-del-anio"
      },
      {
        id: 5,
        titulo: "Mejores de Tom Cruise",
        descripcion:
          "Mejores películas de Ciencia Ficción en las que ha estado Tom Cruise.",
        imagenRuta: "../../assets/imgs/mejores-de-tom-cruise.jpg",
        redireccion: "peliculas/mejores-de-tom-cruise"
      },
      {
        id: 6,
        titulo: "Mejores dramas del año",
        descripcion:
          "Los mejores dramas del género cinematográfico del presente año.",
        imagenRuta: "../../assets/imgs/dramas-del-anio.jpg",
        redireccion: "peliculas/mejores-dramas-del-anio"
      },
      {
        id: 7,
        titulo: "Comedias más taquilleras",
        descripcion: "Comedias que han atraído mayor cantidad de público.",
        imagenRuta: "../../assets/imgs/mejores-comedias.jpg",
        redireccion: "peliculas/comedias-mas-taquilleras"
      },
      {
        id: 8,
        titulo: "Mejores con rating R",
        descripcion:
          "Mejores películas con contenido para adultos, ej.: violencia brutal.",
        imagenRuta: "../../assets/imgs/rating-r.jpg",
        redireccion: "peliculas/mejores-con-rating-r"
      }
    ];

    return this.categorias;
  }

  obtenerRedireccion(id: number) {
    const redireccion = this.categorias.filter(v => v.id === id)[0].redireccion;
    return redireccion;
  }
}
