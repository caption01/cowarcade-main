import type { NextPage } from 'next';

import { HomePageLayout, Text } from 'src/components';

const Home: NextPage = () => {
  return (
    <HomePageLayout>
      <Text type='header'>Nutchapon...</Text>
    </HomePageLayout>
  );
};

export default Home;
