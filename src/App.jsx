import { 
  useState 
} from 'react';

import { 
  Box 
} from '@mui/material';

import 
  NavigationBar 
from '@/common/components/NavigationBar';

import '@/font.scss';


import ThemeProvider from '@/common/theme/ThemeProvider';

import Hero from './common/components/Hero';



function App() {

  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavigationBar theming={theme} setTheme={setTheme}/>
        <Hero />
      </Box>
    </ThemeProvider>
  )
}

export default App
