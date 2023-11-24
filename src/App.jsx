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
from '@/ui/pages/Home/components/Hero';

import 
  AboutUs 
from '@/ui/pages/Home/components/AboutUs';

import 
  Services 
from '@/ui/pages/Home/components/Services';

import 
  Work 
from './ui/pages/Home/components/Work';

import 
  Team 
from './ui/pages/Home/components/Team';

import 
  Sponsors 
from './ui/pages/Home/components/Sponsors';

import 
  Footer 
from '@/common/components/Footer';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import 
  AboutPage 
from '@/ui/pages/About/AboutPage';


function App() {

  const [theme, setTheme] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={
            <Box>
              <NavigationBar theming={theme} setTheme={setTheme}/>
              <Hero />
              <AboutUs />
              <Services />
              <Work />
              <Team />
              <Sponsors />
              <Footer />
            </Box>
          }/>

          <Route path='/info' element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
