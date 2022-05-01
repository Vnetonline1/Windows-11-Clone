import type { AppProps } from 'next/app';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/globals.css'
import Head from 'next/head';

const primaryColors = {
  main: "#0078d4",
  dark: "#001a68",
  light: "#dddddd",
  grey: "#333333",
  darkgrey: "#232325"
};

const secondaryColors = {
  main: "#333333",
  dark: "#232325"
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { ...primaryColors },
    secondary: { ...secondaryColors }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Windows 11 Clone</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </DndProvider>
  )
}

export default MyApp