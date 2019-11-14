import { Component, OnInit, ViewChild } from "@angular/core";
import { PeliculasService } from "../../servicios/peliculas.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  busqueda: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  buscar(peliculaNombre: string) {
    this.router.navigateByUrl(`/peliculas/busqueda/${peliculaNombre}`);
  }
}
