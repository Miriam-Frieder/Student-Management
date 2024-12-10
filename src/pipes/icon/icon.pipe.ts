import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  transform(value: string): string {
    switch(value)
    {
      case("remove"):
        return "❌";

      case("reset") :
        return "✏️";

      case("add"):
        return "➕";

      default:
        return "✅";  
    }
  }

}
