import { useEffect, useState } from 'react'
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider } from '@mantine/styles'
import { useColorScheme } from '@mantine/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const defaultColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    setColorScheme(defaultColorScheme)
  }, [defaultColorScheme])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
