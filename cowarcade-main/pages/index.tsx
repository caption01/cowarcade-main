import type { NextPage } from 'next';

import { HomePageLayout, Text, Button, Box, Tag } from 'src/components';

function handleButtonClick(link) {
  console.log({ link });
}

const Home: NextPage = () => {
  return (
    <HomePageLayout>
      <Text type='header'>
        🙋‍♂️ I'm a "Developer" with a passionate for Cloud ☁️, Linux 📟, and Web
        technology 🖥.
      </Text>
      <Box>
        <Button
          type='primary'
          onClick={() => handleButtonClick('google')}
          width={10}
        >
          View
        </Button>
        <Tag icon='facebook' color='#3F51B5'>
          Facebook
        </Tag>
        <Tag icon='linkedIn' color='#0078d4'>
          LinkedIn
        </Tag>
      </Box>
    </HomePageLayout>
  );
};

export default Home;
