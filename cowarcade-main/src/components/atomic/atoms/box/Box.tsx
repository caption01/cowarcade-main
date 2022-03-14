import styled from 'styled-components';

import { spaceMixin } from 'src/theme/mixins';

import { BoxProps } from './BoxTypes';

const StyledDiv = styled.div<BoxProps>`
  display: ${(props) => props.display};

  ${spaceMixin}
`;

const Box = ({ display = 'block', children }: BoxProps) => {
  return <StyledDiv display={display}>{children}</StyledDiv>;
};

export default Box;
