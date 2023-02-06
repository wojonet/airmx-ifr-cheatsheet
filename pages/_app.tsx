import { useEffect, useState, useRef } from 'react'
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider } from '@mantine/styles'
import { useColorScheme } from '@mantine/hooks'
import useScrollToLocation from '@/util/use-scroll-to-location'

export default function App({ Component, pageProps }: AppProps) {
  const defaultColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    setColorScheme(defaultColorScheme)
  }, [defaultColorScheme])

  useScrollToLocation()

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          globalStyles(theme) {
            return {
              '.active': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
              },
            }
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
