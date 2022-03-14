import styled from 'styled-components';

import { spaceMixin } from 'src/theme/mixins';
import { TextProps, TextType, TextStyledProps, BuildStyle } from './TextTypes';

const TextWrapper = styled.div<TextStyledProps>`
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing};

  ${spaceMixin}
`;

const Text = ({
  type = 'default',
  display = 'inline-block',
  children,
  ...props
}: TextProps) => {
  const { fontSize, fontWeight, letterSpacing } = getTextStyle(type);

  return (
    <TextWrapper
      display={display}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      {...props}
    >
      {children}
    </TextWrapper>
  );
};

export default Text;

function getTextStyle(type: TextType): BuildStyle {
  const textStyle = {
    header: {
      fontSize: '4.8rem',
      letterSpacing: '0rem',
      fontWeight: 400,
    },
    subHeader: {
      fontSize: '3.4rem',
      letterSpacing: '0.025rem',
      fontWeight: 400,
    },
    title: {
      fontSize: '2.2rem',
      letterSpacing: '0.015rem',
      fontWeight: 500,
    },
    body: {
      fontSize: '1.8rem',
      letterSpacing: '0.05rem',
      fontWeight: 400,
    },
    default: {
      fontSize: '1.8rem',
      letterSpacing: '0.05rem',
      fontWeight: 400,
    },
  };

  const styling = textStyle[type] || textStyle.default;

  return { ...styling };
}
