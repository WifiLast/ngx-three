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
  Object3DEventMap,
  Sprite,
  SpriteMaterial,
  Vector2,
} from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-sprite',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
})
export class ThSprite<
  T extends Sprite = Sprite,
  TARGS = /* material? */ SpriteMaterial,
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<Sprite> {
    return Sprite;
  }

  public get isSprite(): true | undefined {
    return this._objRef?.isSprite;
  }
  public get type(): (string | 'Sprite') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set castShadow(value: false) {
    if (this._objRef) {
      this._objRef.castShadow = value;
    }
  }

  public get castShadow(): false | undefined {
    return this._objRef?.castShadow;
  }
  @Input()
  public set geometry(value: BufferGeometry) {
    if (this._objRef) {
      this._objRef.geometry = value;
    }
  }

  public get geometry(): BufferGeometry | undefined {
    return this._objRef?.geometry;
  }
  @Input()
  public set material(value: SpriteMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  public get material(): SpriteMaterial | undefined {
    return this._objRef?.material;
  }
  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector2>(this._objRef.center, value);
    }
  }
  public get center(): Vector2 | undefined {
    return this._objRef?.center;
  }
}
