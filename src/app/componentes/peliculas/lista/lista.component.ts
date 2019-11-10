import { Component, OnInit, Input } from "@angular/core";
import { Pelicula } from "src/app/modelos/pelicula.model";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  constructor() {}

  ngOnInit() {}
}
