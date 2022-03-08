import styled from 'styled-components';

import { BoxProps } from './BoxTypes';

const StyledDiv = styled.div``;

const Box = ({ children }: BoxProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Box;
