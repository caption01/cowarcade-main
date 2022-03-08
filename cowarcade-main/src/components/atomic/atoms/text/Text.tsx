import styled from 'styled-components';

import { TextProps, TextType, StyleConfig } from './TextTypes';

const TextWrapper = styled.div<StyleConfig>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

const Text = ({ type = 'default', children }: TextProps) => {
  const { fontSize, fontWeight, letterSpacing } = getTextStyle(type);

  return (
    <TextWrapper
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    >
      {children}
    </TextWrapper>
  );
};

export default Text;

function getTextStyle(type: TextType): StyleConfig {
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
      fontWeight: 400,
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
