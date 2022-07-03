import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Section from "~/components/ui/structure/Section"

import { Heading , Box, Text} from '@chakra-ui/react'
const Home: NextPage = () => {
  return (
    <Section>
      <Box>
        <Heading>Salsa</Heading>
        <Text fontSize='xl'>ARG</Text>
      </Box>
   

    </Section>
  )
}

export default Home
