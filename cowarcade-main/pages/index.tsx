import type { NextPage } from 'next'

import { Button, Box } from 'src/components'

const Home: NextPage = () => {
  return (
    <Box>
      <Button onOk={() => console.log('hello')} />
    </Box>
  )
}

export default Home
