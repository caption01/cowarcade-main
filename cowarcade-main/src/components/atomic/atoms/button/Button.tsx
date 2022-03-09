import { ReactElement } from 'react';
import { Button as ButtonAntd } from 'antd';
import styled, { useTheme, DefaultTheme } from 'styled-components';

import { Text } from 'src/components';
import { useTrackElement, ElementStateType } from 'src/utils/hooks';

import { ButtonProps, ButtonStyle, TypeButton } from './ButtonTypes';

const StyledBtn = styled(ButtonAntd)<ButtonStyle>`
  & {
    padding: 0.8rem;
    height: auto;
    min-width: 10rem;
    border-radius: 0.8rem;
    border-color: unset;

    background: ${(props) => props?.bgColor};
    color: ${(props) => props?.fontColor};
  }

  &:active,
  &:hover {
    border-color: unset;

    background: ${(props) => props?.bgColor};
    color: ${(props) => props?.fontColor};
  }
`;

const Button = ({
  type = 'primary',
  children,
  ...props
}: ButtonProps): ReactElement => {
  const theme = useTheme();
  const [elemRef, elemState] = useTrackElement();

  const { bgColor, fontColor } = buildButtonStyle(type, theme, elemState);

  return (
    <StyledBtn
      ref={elemRef}
      type='primary'
      bgColor={bgColor}
      fontColor={fontColor}
      {...props}
    >
      <Text type='body'>{children}</Text>
    </StyledBtn>
  );
};

function buildButtonStyle(
  type: TypeButton,
  theme: DefaultTheme,
  elemState: ElementStateType
): ButtonStyle {
  const { colors } = theme;

  const btnStyle = {
    primary: {
      bgColor: colors?.lightBlue,
      fontColor: colors?.white,
    },
    active: {
      bgColor: colors?.darkBlue,
      fontColor: colors?.white,
    },
    hover: {
      bgColor: colors?.darkBlue,
      fontColor: colors?.white,
    },
  };

  const style = btnStyle[type] || btnStyle.primary;

  if (elemState === 'active') {
    return btnStyle.active;
  }

  if (elemState === 'hover') {
    return btnStyle.hover;
  }

  return style;
}

export default Button;
