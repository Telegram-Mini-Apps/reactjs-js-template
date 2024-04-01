import { FC, PropsWithChildren, ReactNode } from 'react';

export type PageComponent = FC<PropsWithChildren<{
  title: string;
  disclaimer?: ReactNode;
}>>;
