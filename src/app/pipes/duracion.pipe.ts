import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duracion"
})
export class DuracionPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === 0) return "No establecida";

    return value <= 60
      ? `${value} minutos`
      : `${Math.floor(value / 60)}h: ${value % 60} min`;
  }
}
