import { 
  useState 
} from "react";

import { 
  Box 
} from "@mui/material";

import 
  NavigationBar 
from "@/common/components/NavigationBar";

import "@/font.scss";

import 
  ThemeProvider 
from "@/common/theme/ThemeProvider";

import 
  Hero 
from "@/ui/pages/Home/components/Hero";

import 
  AboutUs 
from "@/ui/pages/Home/components/AboutUs";



import Work from "./ui/pages/Home/components/Work";

import Team from "./ui/pages/Home/components/Team";

import Sponsors from "./ui/pages/Home/components/Sponsors";

import Footer from "@/common/components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "@/ui/pages/Contacts/Contact";


import WorkPage from "./ui/pages/work/WorkPage";

import Services from "./ui/pages/Home/components/Services";

import Health from '@/ui/pages/216Health/Health';

import ServicesPage from "@/ui/pages/Services/ServicesPage";
import ScrollTop from "./common/helpers/HOC/ScrollTop";
import GetStarted from "./common/components/GetStarted";
import AboutPage from "./ui/pages/About/AboutPage";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollTop />
        <Routes>
          <Route
            path="/"
            element={
              <Box>
                <NavigationBar theming={theme} setTheme={setTheme} />
                <Hero />
                <AboutUs />
                {/* <Services /> */}
                <Work /> 
                <Team />
                <Sponsors />
                
                <Footer />
              </Box>
            }
          />
          
          <Route 
            path='/services'
            element={<ServicesPage />}
          />

          <Route 
            path='/about-us'
            element={<AboutPage />}
          />

          <Route 
            path='/work'
            element={<WorkPage />}
          />
          <Route 
           path="/contact-us" 
           element={<Contact />} 
          />

          <Route 
           path="/216-health" 
           element={<Health />} 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
