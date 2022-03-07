import type { NextPage } from 'next';

import { Button, Box } from 'src/components';

const Home: NextPage = () => {
  const phaseBuild = process.env.phaseBuild as string;
  const configuration = process.env.configuration as string;


  const title = `build on ${phaseBuild} config at ${configuration}`;
  return (
    <Box>
      <h1>{title}</h1>
      <Button type='primary'>Primary</Button>
    </Box>
  );
};

export default Home;
