import { 
  Box,
  ListItem,
  List,
  ListItemText,
  Divider,
  styled,
  Drawer
} from '@mui/material';

import {
  Link,
  NavLink
} from 'react-router-dom'

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


import { 
  Colors,
  EventType, NavBarItems 
} from '@/common/constants';

import 
  CloseIcon 
from '@mui/icons-material/Close';


const CloseBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginInline: '10px'
}))

const NavbarLink = styled(NavLink)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
  fontSize: '13px',
  gap: theme.spacing(3),
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: 'currentColor',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out, visibility 0s linear 0.3s',
  },

  '&:hover::before': {
    visibility: 'visible',
    transform: 'scaleX(1)',
    transition: 'transform 0.3s ease-in-out, visibility 0s linear 0s',
  },

  '&:hover':{
    color: Colors.HavelockBlue,
    
  },

  '&.active':{
    color: Colors.HavelockBlue,
    '&::before': {
      visibility: 'visible',
      transform: 'scaleX(1)',
      transition: 'transform 0.3s ease-in-out, visibility 0s linear 0s',
    },
  },
  
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

const Close = styled(CloseIcon)(({ theme }) => ({
  cursor: 'pointer'
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

const ParentLink = styled(Link)({
  textDecoration: 'none',
  color: Colors.AZTEC
})

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
        <Close />
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
          <NavbarLink to='/216Health'>216 HEALTH</NavbarLink>
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
      <ParentLink to='/'>
        <Logo 
        width={80} 
        src={LogoImg} 
        alt='216-logo'
        />
      </ParentLink>
      
      <NavbarLeftBox>
        <NavbarLinkBox>
          <NavbarLink to='ourServices'>SERVICES</NavbarLink>
          <NavbarLink to='/ourWork'>WORK</NavbarLink>
          <NavbarLink to='/ourClient'>CLIENT</NavbarLink>
          <NavbarLink to='/contactUs'>CONTACT US</NavbarLink>
        </NavbarLinkBox>
        <NavbarLeftBox>
       
          <CustomIOSwitch 
            checked={theming} 
            onChange={handleThemeChange}
          />
          
          <ActionBox>
            <NavbarLink to='/216Health'>216 HEALTH</NavbarLink>
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