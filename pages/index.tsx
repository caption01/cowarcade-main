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

  .content_header {
    text-align: center;
  }
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
    src: '/assets/enres-logo.png',
    link: 'https://enres.co/',
    title: 'enres.',
    content:
      'Working as Frontend-Developer build a IoT-Platform which rich of useful content such as graph and report and using modern stack as NextJs, AWS-Cloud Technology.',
    active: isActive,
  },
  {
    itemIndex: 1,
    src: '/assets/appman-logo.jpeg',
    link: 'https://www.appman.co.th/',
    title: 'Appman.',
    content:
      'Working as Mid-Software engineer create a multi-platform applications on web, mobile and tablet using React and Cordova on Complex-Insurance Business',
    active: isActive,
  },
  {
    itemIndex: 2,
    src: '/assets/seedooh-logo.png',
    link: 'https://www.bangkoklabs.com/',
    title: 'BangkokLabs.',
    content:
      'Fullstack Developer at bangkoklabs, Working with an international team to create a OOH-Advertisement tech-business based on django, react and cloud-services.',
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
        <Text
          className='content_header'
          type='subHeader'
          margin={[2, 0]}
          width='100%'
        >
          Experiences
        </Text>
        <div>
          <Slider beforeChange={handleBeforeChange} {...settings}>
            {map(cards, (c) => (
              <Box key={c?.itemIndex} padding={2}>
                <CardPopup
                  active={c?.active(c?.itemIndex, activeIndex)}
                  content={c?.content}
                  src={c?.src}
                  title={c?.title}
                  link={c?.link}
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

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticProps() {
  const props = {};
  return {
    props,
  };
}

function isActive(itemIndex: number, activeIndex: number): boolean {
  return itemIndex === activeIndex;
}
