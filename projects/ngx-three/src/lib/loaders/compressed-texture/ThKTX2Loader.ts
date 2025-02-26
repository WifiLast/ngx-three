import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { ThTexture } from '../../generated/ThTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class KTX2LoaderService extends ThCallbackLoaderService<CompressedTexture> {
  public readonly clazz = KTX2Loader;

  protected transcoderPath = '';

  public setDecoderPath(path: string) {
    this.transcoderPath = path;
  }

  public createLoaderInstance(): KTX2Loader {
    const loader = super.createLoaderInstance() as KTX2Loader;
    loader.setTranscoderPath(this.transcoderPath);
    return loader;
  }
}

@Pipe({
    name: 'loadKTX2Texture',
    pure: true,
    standalone: false
})
export class ThKTX2LoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  constructor(protected service: KTX2LoaderService) {
    super();
  }
}

@Directive({
    selector: '[loadKTX2Texture]',
    standalone: false
})
export class ThKTX2LoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  constructor(
    @Host() protected host: ThTexture,
    protected zone: NgZone,
    protected service: KTX2LoaderService,
  ) {
    super(host, zone);
  }
}
