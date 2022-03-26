import { Card as CardAntd } from 'antd';
import styled from 'styled-components';

import { spaceMixin } from 'src/theme/mixins';
import { CardProps } from './CardTypes';

const StyledCard = styled(CardAntd)`
  .ant-card-body {
  }

  border-radius: 1rem;
  overflow-y: scroll;

  ${spaceMixin}
`;

function Card({ children, ...props }: CardProps) {
  return <StyledCard {...props}>{children}</StyledCard>;
}

export default Card;
