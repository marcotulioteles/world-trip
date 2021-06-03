import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { ContinentsProvider } from '../ContinentsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  )
}

export default MyApp
