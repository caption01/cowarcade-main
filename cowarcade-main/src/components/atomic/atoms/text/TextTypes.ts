import { ReactNode } from 'react';

interface TextProps {
  type: TextType;
  children: ReactNode;
}

type StyleConfig = {
  fontSize: string;
};

type TextType = 'header' | 'title' | 'content' | 'default';

export type { TextProps, TextType, StyleConfig };
