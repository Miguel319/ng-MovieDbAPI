# NgMovieDbAPI

Esta [aplicación](https://ng-moviedb-api.herokuapp.com/) consume la API: ["The Movie Db"](https://www.themoviedb.org/documentation/api).

URL = https://api.themoviedb.org/3

|  Característica/funcionalidad    |             Endpoint
|----------------------------------| ----------------------------------------------------------------------------------------- |
| Películas populares              | URL+/discover/movie?sort_by=popularity.desc                                               |
| Películas en cartelera           | URL+discover/movie?primary_release_date.gte=mesPasado&primary_release_date.lte=hoy        |
| Películas populares entre niños  | URL+/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc  |
| Películas del año                | URL+/discover/movie?primary_release_year=2019                                             |
| Mejores películas de Tom Cruise  | URL+/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc               |
| Mejores dramas del año           | URL+/discover/movie?with_genres=18&primary_release_year=2019                              |
| Comedias más taquilleras         | URL+/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc                   |
| Mejores películas con rating R   | URL+/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc   |
| Búsqueda de películas            | URL+/search/movie?include_adult=false&page=1&query=peliculaNombre                         |
| Detalles de películas            | URL/movie/id                                                                              |

### NgMovieDbAPI consta de:

* Múltiples componentes
* Servicios
* Pipes personalizados
* Enrutamiento
