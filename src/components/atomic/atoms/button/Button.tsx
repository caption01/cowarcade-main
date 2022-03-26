import { ReactElement, ChangeEvent } from 'react';
import { Button as ButtonAntd } from 'antd';
import styled, { useTheme, DefaultTheme } from 'styled-components';

import { Text } from 'src/components';
import { useTrackElement, ElementStateType } from 'src/utils/hooks';
import { spaceMixin } from 'src/theme/mixins';

import {
  ButtonProps,
  ButtonStyled,
  ButtonStyle,
  TypeButton,
} from './ButtonTypes';

const StyledBtn = styled(ButtonAntd)<ButtonStyled>`
  // actual antd-animating-attr
  // &[ant-click-animating-without-extra-node='true']::after {
  //   display: none;
  // }

  // &::after {
  //   display: none;
  // }

  & {
    padding: 0.8rem;
    min-width: 10rem;

    height: auto;
    border-radius: 0.8rem;
    border-color: unset;
    position: relative;
    overflow: hidden;
    transition: background 400ms;

    background: ${(props) => props?.bgColor};
    color: ${(props) => props?.fontColor};

    ${spaceMixin};
  }

  &:active,
  &:hover {
    border-color: unset;

    background: ${(props) => props?.bgColor};
    color: ${(props) => props?.fontColor};
  }

  // ripple effect
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const Button = ({
  type = 'primary',
  children,
  onClick,
  ...props
}: ButtonProps): ReactElement => {
  const theme = useTheme();
  const [elemRef, elemState] = useTrackElement();

  const { bgColor, fontColor } = buildButtonStyle(type, theme, elemState);

  function handleOnClick(event: ChangeEvent<HTMLButtonElement>) {
    event.preventDefault();

    createRippleEffect(event);

    if (onClick) {
      onClick();
    }
  }

  return (
    <StyledBtn
      ref={elemRef}
      type='primary'
      bgColor={bgColor}
      fontColor={fontColor}
      onClick={handleOnClick}
      {...props}
    >
      <Text type='body'>{children}</Text>
    </StyledBtn>
  );
};

function createRippleEffect(event: ChangeEvent<HTMLButtonElement>) {
  const button = event.currentTarget as HTMLButtonElement;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const pointerXOnElement = event?.nativeEvent?.offsetX;
  const pointerYOnElement = event?.nativeEvent?.offsetY;

  const originLeft = pointerXOnElement - radius;
  const originTop = pointerYOnElement - radius;

  if (circle) {
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${originLeft}px`;
    circle.style.top = `${originTop}px`;
    circle.classList.add('ripple');
  }

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

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
