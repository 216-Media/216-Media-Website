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
    useEffect,
useState }
from 'react';

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


import { 
  Colors,
  EventType, 
  NavBarItems,
  ListItems
} from '@/common/constants';


import 
  CloseIcon 
from '@mui/icons-material/Close';
import Environment from '../Environment';



const CloseBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginInline: '10px'
}))



const Close = styled(CloseIcon)(({ theme }) => ({
  cursor: 'pointer'
}))


const NavbarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

function NavigationBar() {

  const NavbarBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    zIndex: '3',
    backgroundColor: isTop ? Colors.White : 'transparent',
    boxShadow: isTop ? `0px 4px 10px rgba(0, 0, 0, 0.1)` : '',
    height: '90px',
    overflow: 'hidden',
    top: 0,
    width: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    }
  }))

  const HamIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    color: !isTop ? Colors.White : Colors.AZTEC,
    marginRight: theme.spacing(2),
    marginLeft: '13px',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }))

  const NavbarLink = styled(NavLink)(({ theme }) => ({
    position: 'relative',
    textDecoration: 'none',
    color: isTop ? `${Colors.AZTEC}` : `${Colors.White}`,
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
  const [mobileMenu, setMobileMenu] = useState({
    top: false
  })
  const [isTop, setIsTop] = useState(true);


  useEffect(() => {
    const changeColor = () => {
      setIsTop(window.scrollY >= 90);
    };

    changeColor();

    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

 

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
          {
            ListItems.map((list) => (
              <Fragment
                key={list.id}
              >
                <Divider />
                  <ParentLink to={list.link}>
                    <ListItem button>
                      <ListItemText primary={list.linkText}/>
                    </ListItem>
                  </ParentLink>
              </Fragment>
            ))
          }
       
        <ActionBox>
          <NavbarLink to='/216-health'>216 HEALTH</NavbarLink>
          <Logo width={30} src={`${Environment.assetBase}/216_health_img-PBAoAdcz.jpg`} alt='216-health' />
        </ActionBox>
      </List>
    </Box>
  )
  

  return (
    <NavbarBox>
    
      <NavbarContainer>

      <ParentLink to='/'>
        
          <Logo 
          width={60} 
          src={`${Environment.assetBase}/216-logo-I0QFPrKC.png`} 
          alt='216-logo' 
          />
        
      </ParentLink>
      
      <NavbarLeftBox>
        <NavbarLinkBox>

          {ListItems.map((list) => (
            <NavbarLink to={list.link}>{list.linkText}</NavbarLink>
          ))}
        </NavbarLinkBox>
        <NavbarLeftBox>
          
          <ActionBox>
            <NavbarLink to='/216-health'>216 HEALTH</NavbarLink>
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
    
    </NavbarBox>
    
  )
}

export default NavigationBar