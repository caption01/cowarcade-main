import type { NextPage } from 'next';

import { HomePageLayout, Text, Button, Box } from 'src/components';

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
          onClick={() => {
            console.log('hello');
          }}
          width={10}
        >
          Bio
        </Button>
      </Box>
    </HomePageLayout>
  );
};

export default Home;
