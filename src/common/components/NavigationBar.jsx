import { 
  Box,
  ListItem,
  List,
  ListItemText,
  Divider,
  styled,
  Drawer
} from '@mui/material';

import 
  Switch
from '@mui/joy/Switch'

import 
  React,
  { Fragment,
useState }
from 'react';

import { 
  Typography 
} from '@mui/material';

import { 
  Container 
} from '@mui/material';

import 
  MenuIcon
from '@mui/icons-material/Menu';


import 
  LogoImg
from '@/assets/icons/216-logo.png'

import
  healthImg
from '@/assets/icons/216-health.png';

import 
  CustomIOSwitch 
from '@/common/components/Switcher';

import DarkMode from '@mui/icons-material/DarkMode';
import { 
  EventType, NavBarItems 
} from '@/common/constants';


const CloseBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginInline: '10px'
}))

const NavbarLink = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '13px',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const HamIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: 'pointer',
  display: 'none',
  marginRight: theme.spacing(2),
  marginLeft: '13px',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}))

const NavbarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  }
}))

const Logo = styled('img')(({ theme }) => ({
  cursor: 'pointer'
}))

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5),
  marginRight: '14px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const ActionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const NavbarLeftBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}))

function NavigationBar({
  setTheme,
  theming
}) {

  const [mobileMenu, setMobileMenu] = useState({
    top: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type === EventType.Keydown &&
     (event.type === EventType.Tab || event.type === EventType.Shift)
    ){
      return;
    }

    setMobileMenu({...mobileMenu, [anchor]: open})
  }

  const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
    role='presentation'
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseBox >
        <Logo width={70} src={LogoImg} alt='216-logo'/>
        <HamIcon />
      </CloseBox>

      <List component='nav'>
        {NavBarItems.map((text, index) => (
          <Fragment key={index}>
            <Divider />
            <ListItem button key={index}>
              <ListItemText primary={text}/>
            </ListItem>
            
          </Fragment>
        ))}
        <ActionBox>
          <NavbarLink>216 HEALTH</NavbarLink>
          <Logo width={30} src={healthImg} alt='216-health' />
        </ActionBox>
      </List>
    </Box>
  )
  

  
  const handleThemeChange = () => {
    setTheme(
      !theming
    )
  }

  return (
    <NavbarContainer>
      <Logo width={80} src={LogoImg} alt='216-logo'/>
      <NavbarLeftBox>
        <NavbarLinkBox>
          {NavBarItems.map((link, index) => (
            <NavbarLink key={index} variant='body2'>{link}</NavbarLink>
          ))}
        </NavbarLinkBox>
        <NavbarLeftBox>
       
            <CustomIOSwitch />
          
          <ActionBox>
            <NavbarLink>216 HEALTH</NavbarLink>
            <Logo width={30} src={healthImg} alt='216-health' />
          </ActionBox>
          <HamIcon onClick={toggleDrawer('top', true)}/>
          <Drawer
            anchor='top'
            open={mobileMenu['top']}
            onClose={toggleDrawer('top', false)}
          >
            {list('top')}
          </Drawer>
        </NavbarLeftBox>
      </NavbarLeftBox>
    </NavbarContainer>
  )
}

export default NavigationBar