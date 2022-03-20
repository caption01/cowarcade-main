import { ReactElement, ReactNode } from 'react';

interface CardPopupStyleProps {
  active: boolean;
}

interface CardPopupProps extends CardPopupStyleProps {
  content: string;
  src: string;
}

export type { CardPopupProps, CardPopupStyleProps };
