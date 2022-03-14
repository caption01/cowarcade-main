import styled from 'styled-components';

import { Text, Icon, Box } from 'src/components/atomic';
import { spaceMixin } from 'src/theme/mixins';

import { TagProps } from './TagTypes';

const StyledTag = styled.span`
  & {
    display: inline-block;
    margin: 0;
    padding: 0.4rem 0.4rem;
    border-radius: 0.4rem;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.color};
  }

  ${spaceMixin}
`;

const Tag = ({ icon, color, children, ...props }: TagProps) => {
  return (
    <StyledTag color={color} {...props}>
      <Box display='flex'>
        {icon && <Icon type={icon} size={2.4} margin={[0, 0.3]} />}
        <Text type='body' margin={[0, 0.3]}>
          {children}
        </Text>
      </Box>
    </StyledTag>
  );
};

export default Tag;
