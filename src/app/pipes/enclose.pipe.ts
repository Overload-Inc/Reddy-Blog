import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'enclose'})

export class EnclosePipe implements PipeTransform {

  transform(value: any, symbol: string): any {
    return symbol + value + symbol;
  }
}
