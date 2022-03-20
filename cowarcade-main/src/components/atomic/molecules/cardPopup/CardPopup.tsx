import { useState } from 'react';
import styled from 'styled-components';

import { Card, Box, ImageFill } from 'src/components';
import { CardPopupProps, CardPopupStyleProps } from './CardPopupTypes';

const Wrapper = styled.div<CardPopupStyleProps>`
  position: relative;
  opacity: ${({ active }) => !active && 0.3};
  cursor: grab;

  .cardpopup {
    box-shadow: ${({ active }) => active && 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
  }
`;

function CardPopup({
  active = false,
  src = '',
  content = '',
  ...props
}: CardPopupProps) {
  return (
    <Wrapper active={active}>
      <Card className='cardpopup' height={35}>
        <Box className='cardpopup__image'>
          <Box margin={2}>
            <ImageFill src={src} />
          </Box>
          <Box className='cardpopup__body'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            molestiae blanditiis consequatur voluptatum obcaecati provident
            corporis expedita voluptate facilis. Dolor placeat cumque tempora
            voluptas aspernatur praesentium eaque, aliquid cupiditate nemo.
            {content}
          </Box>
        </Box>
      </Card>
    </Wrapper>
  );
}

export default CardPopup;
