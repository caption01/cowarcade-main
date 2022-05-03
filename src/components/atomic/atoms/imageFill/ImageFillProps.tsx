import { ReactNode } from 'react';

interface ImageFillProps {
  src: string;
  quality?: number;
  children?: ReactNode;
  unoptimized?: boolean;
}

export type { ImageFillProps };
