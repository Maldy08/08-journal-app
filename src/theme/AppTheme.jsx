import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { purpleTheme } from './';


export const AppTheme = ( { children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
        { children }
  </ThemeProvider>
  )
}
