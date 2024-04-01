import type { RGB } from '@tma.js/sdk';
import type { FC, ReactNode } from 'react';

export type DisplayDataComponent = FC<{
  rows: {
    title: string;
    value?: RGB | string | boolean | ReactNode;
  }[]
}>;
