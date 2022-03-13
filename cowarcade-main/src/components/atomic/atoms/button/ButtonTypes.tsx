import { ButtonProps as ButtonAntdProps } from 'antd';

import { HTMLRefElement } from 'src/utils/hooks';

type ButtonAntdPropsOmit = Omit<ButtonAntdProps, 'type'>;

interface ButtonStyle {
  ref?: HTMLRefElement;
  bgColor?: string;
  fontColor?: string;
}

type TypeButton = 'primary';

interface ButtonProps extends ButtonAntdPropsOmit, ButtonStyle {
  onClick: () => void,
  type: TypeButton;
}

export type { ButtonProps, ButtonStyle, TypeButton };
