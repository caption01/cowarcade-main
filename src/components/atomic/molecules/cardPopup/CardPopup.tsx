import styled from 'styled-components';

import { Card, Box, Text, ImageFill } from 'src/components';
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
  link = '',
}: CardPopupProps) {
  return (
    <Wrapper active={active}>
      <Card className='cardpopup' height={40}>
        <Box>
          <Box className='cardpopup__image'>
            <ImageFill src={src} />
          </Box>
          <Box className='cardpopup__body' padding={2}>
            <Text type='title'>
              <a target='_blank' href={link} rel='noreferrer'>
                {title}
              </a>
            </Text>
            <Text type='body'>{content}</Text>
          </Box>
        </Box>
      </Card>
    </Wrapper>
  );
}

export default CardPopup;
