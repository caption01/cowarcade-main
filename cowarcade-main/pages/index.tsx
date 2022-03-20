import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { map } from 'lodash';
import Slider from 'react-slick';
import styled from 'styled-components';

import { HomePageLayout, Text, Box, Tag, CardPopup } from 'src/components';

const Content = styled.div`
  width: 50vw;
  max-width: 80rem;
  margin: auto;
`;

const example = '/assets/example.jpeg';

const tags = [
  {
    title: 'Facebook',
    color: '#3F51B5',
    url: 'https://www.facebook.com/nutchapon.hanouypornlert',
  },
  {
    title: 'LinkedIn',
    color: '#0078d4',
    url: 'https://www.linkedin.com/in/nutchapon-hanouypornlert-85794a174/',
  },
  {
    title: 'Profile',
    color: '#77B6EA',
    url: 'https://drive.google.com/file/d/1C6yiFHnxQoLByWMRSyzc3vmFXRFTN8SK/view?usp=sharing',
  },
  {
    title: 'Medium',
    color: '#363732',
    url: 'https://medium.com/@nhcoding',
  },
];

const cards = [
  {
    itemIndex: 0,
    content: 'a',
    src: example,
    title: 'enres.',
    active: isActive,
  },
  {
    itemIndex: 1,
    content: 'b',
    src: example,
    title: 'enres.',
    active: isActive,
  },
  {
    itemIndex: 2,
    content: 'c',
    src: example,
    title: 'enres.',
    active: isActive,
  },
];

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '180px',
  slidesToShow: 1,
  speed: 500,
};

const Home: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleBeforeChange(currentSlide: number, nextSlide: number): void {
    setActiveIndex(nextSlide);
  }

  return (
    <HomePageLayout>
      <Box width={'60vw'}>
        <Text type='header'>
          🙋‍♂️ Hi My name is Nutchapon, I'm a "Developer" with a passionate for
          Cloud ☁️, Linux 📟, and Web technology 🖥.
        </Text>
        <Box margin={[2, 0]}>
          {map(tags, (tag) => (
            <Tag
              key={tag?.title}
              margin={[1.2, 0]}
              padding={0.4}
              mr={2}
              color={tag?.color}
            >
              <Link href={tag?.url} passHref>
                <a target={'_blank'} style={{ color: 'inherit' }}>
                  {tag?.title}
                </a>
              </Link>
            </Tag>
          ))}
        </Box>
      </Box>
      <Content>
        <div>
          <Slider beforeChange={handleBeforeChange} {...settings}>
            {map(cards, (c) => (
              <Box key={c?.itemIndex} padding={2}>
                <CardPopup
                  active={c?.active(c?.itemIndex, activeIndex)}
                  content={c?.content}
                  src={c?.src}
                  title={c?.title}
                />
              </Box>
            ))}
          </Slider>
        </div>
      </Content>
    </HomePageLayout>
  );
};

export default Home;

function isActive(itemIndex: number, activeIndex: number): boolean {
  return itemIndex === activeIndex;
}
