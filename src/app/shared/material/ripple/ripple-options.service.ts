import { Injectable, Provider } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class RippleOptionsService implements RippleGlobalOptions {
  disabled = true;
}

export const RIPPLE_OPTIONS_PROVIDER: Provider = {
  provide: MAT_RIPPLE_GLOBAL_OPTIONS,
  useExisting: RippleOptionsService,
};
