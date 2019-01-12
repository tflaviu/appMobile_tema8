import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatNumberPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return '(' + value.substr(0, 4) + ') ' + value.substr(4, 3) + ' ' + value.substr(7, 3);
  }
}
