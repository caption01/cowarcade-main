import { ReactNode } from 'react';

interface TextProps {
  type: TextType;
  children: ReactNode;
}

type StyleConfig = {
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
};

type TextType = 'header' | 'subHeader' | 'title' | 'body' | 'default';

export type { TextProps, TextType, StyleConfig };
