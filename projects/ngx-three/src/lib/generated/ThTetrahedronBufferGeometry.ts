/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { TetrahedronBufferGeometry } from 'three';
import { ThGeometry } from './ThGeometry';
import { ThPolyhedronBufferGeometry } from './ThPolyhedronBufferGeometry';

@Component({
  selector: 'th-tetrahedronBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThTetrahedronBufferGeometry),
    },
  ],
})
export class ThTetrahedronBufferGeometry<
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThPolyhedronBufferGeometry<TARGS> {
  @Input()
  public obj!: TetrahedronBufferGeometry;
  protected getType(): Type<TetrahedronBufferGeometry> {
    return TetrahedronBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
