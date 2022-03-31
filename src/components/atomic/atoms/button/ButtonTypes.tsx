import { ButtonProps as ButtonAntdProps } from 'antd';

// import { HTMLRefElement } from 'src/utils/hooks';
import { SpaceMixin } from 'src/theme/mixins';

type ButtonAntdPropsOmit = Omit<ButtonAntdProps, 'type'>;

interface ButtonStyle extends SpaceMixin {
  ref?: any;
  bgColor?: string;
  fontColor?: string;
}

interface ButtonStyled extends ButtonStyle {
  onClick: any;
}

type TypeButton = 'primary';

interface ButtonProps extends ButtonAntdPropsOmit, ButtonStyle {
  type: TypeButton;
  onClick: () => void;
}

export type { ButtonProps, ButtonStyled, ButtonStyle, TypeButton };
