import { ButtonProps as ButtonAntdProps } from 'antd';

interface ButtonStyle {
  bgColor?: string;
  fontColor?: string;
}

interface ButtonProps extends ButtonAntdProps, ButtonStyle {}

export type { ButtonProps, ButtonStyle };
