/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera } from 'three';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThControlBase } from '../ThControlBase';
import { ThOrbitControls } from './ThOrbitControls';

@Component({
  selector: 'th-mapControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
  ],
})
export class ThMapControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThOrbitControls<TARGS> {
  @Input()
  public obj!: MapControls;
  protected getType(): Type<MapControls> {
    return MapControls;
  }
}
