import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { map } from 'lodash';
import Slider from 'react-slick';
import styled from 'styled-components';

import { HomePageLayout, Text, Box, Tag } from 'src/components';

const Content = styled.div`
  width: 50vw;
  height: 300px;
  background: red;
  margin: auto;
`;

const Card = styled.div`
  height: 250px;
  background: blue;
  border: 2px green solid;
`;

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
    title: 'Medium',
    color: '#363732',
    url: 'https://medium.com/@nhcoding',
  },
  {
    title: 'Profile',
    color: '#C7D3DD',
    url: 'https://drive.google.com/file/d/1C6yiFHnxQoLByWMRSyzc3vmFXRFTN8SK/view?usp=sharing',
  },
];

const cards = [
  {
    itemIndex: 0,
    title: 0,
    status: (itemIndex, activeIndex) =>
      itemIndex === activeIndex ? 'item-active' : 'non-active',
  },
  {
    itemIndex: 1,
    title: 1,
    status: (itemIndex, activeIndex) =>
      itemIndex === activeIndex ? 'item-active' : 'non-active',
  },
  {
    itemIndex: 2,
    title: 2,
    status: (itemIndex, activeIndex) =>
      itemIndex === activeIndex ? 'item-active' : 'non-active',
  },
];

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '200px',
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
            {map(cards, (c, idx) => (
              <Card key={c?.itemIndex}>
                <h3>{c?.title}</h3>
                <h3>{c?.status(c?.itemIndex, activeIndex)}</h3>
              </Card>
            ))}
          </Slider>
        </div>
      </Content>
    </HomePageLayout>
  );
};

export default Home;
