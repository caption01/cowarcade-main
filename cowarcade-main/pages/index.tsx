import type { NextPage } from 'next';

import { Button, Box } from 'src/components';

const Home: NextPage = () => {
  return (
    <Box>
      <Button type='dashed'>Primary Button</Button>
    </Box>
  );
};

export default Home;
