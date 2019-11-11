import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Pelicula } from "src/app/modelos/pelicula.model";

@Component({
  selector: "app-pelicula-tarjeta",
  templateUrl: "./pelicula-tarjeta.component.html",
  styleUrls: ["./pelicula-tarjeta.component.css"]
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input() pelicula: Pelicula;
  @Input("id") peliculaId: number;
  @Output() cambioPelicula: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  //Emisión de la película seleccionada desde el hijo hacia el padre
  verDetalles() {
    this.cambioPelicula.emit(this.peliculaId);
  }
}
