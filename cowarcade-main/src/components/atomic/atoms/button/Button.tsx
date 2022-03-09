import { ReactElement } from 'react';
import { Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

import { Text } from 'src/components';
import { ButtonProps, ButtonStyle } from './ButtonTypes';

const StyledBtn = styled(ButtonAntd)<ButtonStyle>`
  & {
    padding: 0.8rem;
    height: auto;
    min-width: 10rem;
    border-radius: 0.8rem;

    background: ${(props) => props?.bgColor};
    color: ${(props) => props?.fontColor};
  }
`;

const Button = ({
  children,
  bgColor = '#1890ff',
  fontColor = '#fff',
  ...props
}: ButtonProps): ReactElement => {
  return (
    <StyledBtn
      type='primary'
      bgColor={bgColor}
      fontColor={fontColor}
      {...props}
    >
      <Text type='body'>{children}</Text>
    </StyledBtn>
  );
};

export default Button;
