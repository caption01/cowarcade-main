import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Button, Box } from '../src/components'

const Home: NextPage = () => {
  return (
    <Box>
      <Button onOk={() => console.log('hello')} />
    </Box>
  )
}

export default Home
