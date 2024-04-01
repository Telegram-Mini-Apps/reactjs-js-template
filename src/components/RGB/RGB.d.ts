import { RGB } from '@tma.js/sdk';
import { FC } from 'react';

export type RGBComponent = FC<JSX.IntrinsicElements['div'] & {
  color: RGB;
}>;
