import { ReactElement } from 'react';
import { Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

import { ButtonProps } from './Types';

const StyledBtn = styled(ButtonAntd)``;

const Button = ({ children, ...props}: ButtonProps): ReactElement => {
  return <StyledBtn type='primary' {...props}>{children}</StyledBtn>;
};

export default Button;
