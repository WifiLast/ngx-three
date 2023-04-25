/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ShaderMaterial, Texture } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-texturePass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThTexturePass) },
  ],
})
export class ThTexturePass<
  T extends TexturePass = TexturePass,
  TARGS = [map: Texture, opacity?: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<TexturePass> {
    return TexturePass;
  }

  @Input()
  public set map(value: Texture) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  // @ts-ignore
  public get map(): Texture | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  // @ts-ignore
  public get opacity(): number | undefined {
    return this._objRef?.opacity;
  }
  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  // @ts-ignore
  public get uniforms(): { [name: string]: { value: any } } | undefined {
    // @ts-ignore
    return this._objRef?.uniforms;
  }
  @Input()
  public set material(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  // @ts-ignore
  public get material(): ShaderMaterial | undefined {
    return this._objRef?.material;
  }
  @Input()
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  // @ts-ignore
  public get fsQuad(): FullScreenQuad | undefined {
    return this._objRef?.fsQuad;
  }
}
