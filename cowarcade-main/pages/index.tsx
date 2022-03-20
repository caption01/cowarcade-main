import { NextPage } from 'next';
import Link from 'next/link';
import { map } from 'lodash';

import { HomePageLayout, Text, Box, Tag } from 'src/components';

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

const Home: NextPage = () => {
  return (
    <HomePageLayout>
      <Text type='header'>
        🙋‍♂️ I'm a "Developer" with a passionate for Cloud ☁️, Linux 📟, and Web
        technology 🖥.
      </Text>
      <Box>
        {map(tags, (tag) => (
          <Tag margin={[1.2, 0]} padding={0.4} mr={2} color={tag?.color}>
            <Link href={tag?.url} passHref>
              <a target={'_blank'} style={{ color: 'inherit' }}>
                {tag?.title}
              </a>
            </Link>
          </Tag>
        ))}
      </Box>
    </HomePageLayout>
  );
};

export default Home;
