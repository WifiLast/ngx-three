/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  BufferGeometry,
  Material,
  NormalOrGLBufferAttributes,
  Object3DEventMap,
  Points,
} from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-points',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
})
export class ThPoints<
  TGeometry extends BufferGeometry<NormalOrGLBufferAttributes> = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends Points<TGeometry, TMaterial> = Points<TGeometry, TMaterial>,
  TARGS = [geometry?: TGeometry, material?: TMaterial],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<Points<TGeometry, TMaterial>> {
    return Points;
  }

  public get isPoints(): true | undefined {
    return this._objRef?.isPoints;
  }
  public get type(): (string | 'Points') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set morphTargetInfluences(value: number[] | undefined) {
    if (this._objRef) {
      this._objRef.morphTargetInfluences = value;
    }
  }

  public get morphTargetInfluences(): (number[] | undefined) | undefined {
    return this._objRef?.morphTargetInfluences;
  }
  @Input()
  public set morphTargetDictionary(
    value: { [key: string]: number } | undefined,
  ) {
    if (this._objRef) {
      this._objRef.morphTargetDictionary = value;
    }
  }

  public get morphTargetDictionary():
    | ({ [key: string]: number } | undefined)
    | undefined {
    return this._objRef?.morphTargetDictionary;
  }
  @Input()
  public set geometry(value: TGeometry) {
    if (this._objRef) {
      this._objRef.geometry = value;
    }
  }

  public get geometry(): TGeometry | undefined {
    return this._objRef?.geometry;
  }
  @Input()
  public set material(value: TMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  public get material(): TMaterial | undefined {
    return this._objRef?.material;
  }
}
