import NextImage from 'next/image';
import styled from 'styled-components';

import { ImageFillProps } from './ImageFillProps';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  margin: auto;
`;

const example = '/assets/example.jpeg';

function ImageFill({
  quality = 60,
  src = example,
  unoptimized = false,
}: ImageFillProps) {
  return (
    <Wrapper>
      <NextImage
        alt='example'
        src={src}
        layout='fill'
        objectFit='contain'
        quality={quality}
        unoptimized={unoptimized}
      />
    </Wrapper>
  );
}

export default ImageFill;
