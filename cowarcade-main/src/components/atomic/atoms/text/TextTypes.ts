import { ReactNode } from 'react';

import { SpaceMixin } from 'src/theme/mixins';

type TextStyledProps = {
  display: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
};

interface TextProps extends SpaceMixin {
  type: TextType;
  display?: string;
  children: ReactNode;
  className?: string;
}

type BuildStyle = Omit<TextStyledProps, 'display'>;

type TextType = 'header' | 'subHeader' | 'title' | 'body' | 'default';

export type { TextProps, TextType, TextStyledProps, BuildStyle };
