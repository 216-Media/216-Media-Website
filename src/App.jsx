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


import 
  ThemeProvider 
from '@/common/theme/ThemeProvider';

import 
  Hero 
from '@/ui/Hero';

import 
  AboutUs 
from '@/ui/AboutUs';

import Services from '@/ui/Services';
import Work from './ui/Work';
import Team from './ui/Team';
import Sponsors from './ui/Sponsors';


function App() {

  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavigationBar theming={theme} setTheme={setTheme}/>
        <Hero />
        <AboutUs />
        <Services />
        <Work />
        <Team />
        <Sponsors />
      </Box>
    </ThemeProvider>
  )
}

export default App
