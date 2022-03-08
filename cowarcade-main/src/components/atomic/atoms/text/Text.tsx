import styled from 'styled-components';

import { TextProps, TextType, StyleConfig } from './TextTypes';

const TextWrapper = styled.div<StyleConfig>`
  font-size: ${(props) => props.fontSize};
`;

const Text = ({ type = 'default', children }: TextProps) => {
  const { fontSize } = getTextStyle(type);

  return <TextWrapper fontSize={fontSize}>{children}</TextWrapper>;
};

export default Text;

function getTextStyle(type: TextType): StyleConfig {
  const textStyle = {
    header: {
      fontSize: '2.6rem',
    },
    title: {
      fontSize: '2.2rem',
    },
    content: {
      fontSize: '1.8rem',
    },
    default: {
      fontSize: '1rem',
    },
  };

  const styling = textStyle[type] || textStyle.default;

  return { ...styling };
}
