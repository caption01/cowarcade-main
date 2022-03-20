import { useState } from 'react';
import styled from 'styled-components';

import { Card, Box, ImageFill, Text } from 'src/components';
import { CardPopupProps, CardPopupStyleProps } from './CardPopupTypes';

const Wrapper = styled.div<CardPopupStyleProps>`
  position: relative;
  opacity: ${({ active }) => !active && 0.3};
  cursor: grab;

  .cardpopup {
    box-shadow: ${({ active }) => active && 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
  }

  .cardpopup__body {
    > * {
      &:first-child {
        width: 100%;
        text-align: center;
        margin-bottom: 1.2rem;
      }
    }
  }
`;

function CardPopup({
  active = false,
  src = '',
  content = '',
  title = '',
  ...props
}: CardPopupProps) {
  return (
    <Wrapper active={active}>
      <Card className='cardpopup' height={40}>
        <Box>
          <Box className='cardpopup__image' margin={[2, 0]}>
            <ImageFill src={src} />
          </Box>
          <Box className='cardpopup__body' padding={2}>
            <Text type='title'>{title}</Text>
            <Text type='body'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              molestiae blanditiis consequatur voluptatum obcaecati provident
              corporis expedita voluptate facilis. Dolor placeat cumque tempora
              voluptas aspernatur praesentium eaque, aliquid cupiditate nemo.
              {content}
            </Text>
          </Box>
        </Box>
      </Card>
    </Wrapper>
  );
}

export default CardPopup;
