import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: "380px",
  md: "768px",
  lg: "960px",
  xl: "1320px"
})

export const theme = extendTheme({
  breakpoints,
  color: {
    gray: {
      "50": "#F5F8FA",
      "100": "##DADADA",
      "600": "#47585B",
    },
    yellow: {
      "400": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      a: {
        textDecoration: "none"
      },
      body: {
        color: "gray.600",
      }
    }
  }
})