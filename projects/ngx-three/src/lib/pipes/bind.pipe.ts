import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bind',
    standalone: false
})
export class BindPipe implements PipeTransform {
  transform(methodToBind: (...anyArgs: unknown[]) => unknown, instance: unknown) {
    return methodToBind.bind(instance);
  }
}
