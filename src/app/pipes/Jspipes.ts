import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'JsonToObjects'
})
export class JsonPipeToObejct implements PipeTransform {
    transform(value:string) {
      return JSON.parse(value);
    }

}