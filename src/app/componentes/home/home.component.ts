import { Component, OnInit } from "@angular/core";
import { Categoria } from "../../modelos/categoria.model";
import { CategoriasService } from "../../servicios/categorias.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  categorias: Categoria[];

  constructor(
    private categoriasServicio: CategoriasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categorias = this.categoriasServicio.crearCategorias();
  }

  redireccionar(id: number) {
    let redireccion = this.categoriasServicio.obtenerRedireccion(id);
    this.router.navigateByUrl(redireccion);
  }
}
