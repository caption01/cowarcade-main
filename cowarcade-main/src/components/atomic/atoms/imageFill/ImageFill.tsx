import NextImage from 'next/image';
import styled from 'styled-components';

import { ImageFillProps } from './ImageFillProps';

const Wrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: auto;

  img {
    border-radius: 50%;
  }
`;

const example = '/assets/example.jpeg';

function Image({ quality = 60, src = example, ...props }: ImageFillProps) {
  return (
    <Wrapper>
      <NextImage
        alt='example'
        src={src}
        layout='fill'
        objectFit='none'
        quality={quality}
      />
    </Wrapper>
  );
}

export default Image;
