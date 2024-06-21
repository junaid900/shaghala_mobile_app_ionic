import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mjpipes'
})
export class MjpipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  json(data: any) {
    try {
      return JSON.stringify(data);
    } catch (e) {
      return "{}";
    }
  }

}
