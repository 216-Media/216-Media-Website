import { 
  Box 
} from '@mui/material';

import 
  React 
from 'react';

import 
  Logo 
from '@/assets/icons/216-logo.png';

import {
  centeredView
} from '@/common/styles/global';

import { 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import { palette } from '../theme/palette';
import { typography } from '../theme/typography';
import { FormControlLabel, FormGroup } from '@mui/material/index';


function NavigationBar() {

  const [theme, setTheme] = useState(false);

  const darkTheme = createTheme({
    palette: palette(theme),
    typography: typography()
  })

  const handleThemeChange = () => {
    setTheme(
      !theme
    )
  }

  return (
    <Box style={centeredView}>
      <img 
        width={80} 
        src={Logo} 
        alt='216-Media-logo'
      />

      <List component="nav">
        <ListItem 
          to="/About-us"
        >
          <ListItemText primary="ABOUT US" />
        </ListItem>
        <ListItem 
          to="/our-services"
        >
          <ListItemText primary="OUR SERVICES" />
        </ListItem>
        <ListItem 
          to="/our-work"
        >
          <ListItemText primary="OUR WORK" />
        </ListItem>
        <ListItem 
          to="/contact-us"
        >
          <ListItemText primary="CONTACT US" />
        </ListItem>
      </List>

      <FormGroup>
        <FormControlLabel 
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked/>}
        />
      </FormGroup>

    </Box>
  )
}

export default NavigationBar