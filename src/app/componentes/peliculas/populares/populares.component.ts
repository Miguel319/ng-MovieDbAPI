import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../../servicios/peliculas.service";

@Component({
  selector: "app-populares",
  templateUrl: "./populares.component.html",
  styleUrls: ["./populares.component.css"]
})
export class PopularesComponent implements OnInit {
  peliculas: any[] = [];
  imgPath = "image.tmdb.org/t/p/w300";

  constructor(private peliculaServicio: PeliculasService) {
    this.obtenerPopulares();
  }

  ngOnInit() {}

  obtenerPopulares() {
    this.peliculaServicio.obtenerPeliculasPopulares().subscribe(
      (res: any) => {
        this.peliculas = res.results;
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
