import { Injectable, Provider } from '@angular/core';
import { FloatLabelType, LabelOptions, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class LabelOptionsService implements LabelOptions {
  float: FloatLabelType = 'never';
}

export const LABEL_OPTIONS_PROVIDER: Provider = {
  provide: MAT_LABEL_GLOBAL_OPTIONS,
  useExisting: LabelOptionsService,
};
