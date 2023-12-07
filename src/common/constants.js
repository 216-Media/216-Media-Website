import { 
    Bob,
    Allison,
    Nomzamo,
    David
} from "@/assets/images"


import{
    keyframes
} from '@emotion/react';


import {
    getRandomPattern
} from '@/common/helpers/randomizePatterns';

import Great from '@/assets/icons/great.png'

import TeamCollab from '@/assets/icons/team-collbab.png';

import Handshake from '@/assets/icons/handshake.png';

import StartUp from '@/assets/icons/start-up.png';

import SmallBusiness from '@/assets/icons/small-business.png';

import Enterprise from '@/assets/icons/enterprise.png';

import Entrepreneur from '@/assets/icons/entrepreneur.png'



export const Colors = {
    White: '#FFFFFF',
    Grey: '#808080',
    HavelockBlue: '#429DD6',
    AZTEC: '#070A0A',
    Lemon: '#F8EF22',
    HollywoodCerise: '#EB058C',
    SkyBlue: '#E2F0F9',
    BlackOpac: 'rgba(0, 0, 0, 0.6)',
    ScaleGrey: '#a0a0b4',
    SmokyGrape: '#292929',
    Concrete: '#f3f3f3',
}

export const EventType = {
    Keydown: 'keydown',
    Tab: 'Tab',
    Shift: 'Shift'
}

export const NavBarItems = [
    'ABOUT US',
    'OUR SERVICES',
    'OUR WORK',
    'OUR CLIENTS',
    'CONTACT US'
]

export const linkObjTeam = [
   'Culture',
   'Network',
];

export const linkObjAbout = [
    'About us',
];

export const linkObjCompany = [
    'Vision and Mission',
]

export const TeamItems = [
    'LEADERS',
    'INNOVATORS',
    'DESIGNERS',
    'THINKERS',
    'DOERS'
];


export const values = [
    { 
        id: 1, 
        title: 'We provide great product designs', 
        icon: Great, 
        description: 'We are committed to providing flexible, reliable, and elegant products tou our clients ' 
    },
    { 
        id: 2, 
        title:'We are friendly, resourceful professionals' , 
        icon:  TeamCollab, 
        description: 'We’re a high-caliber team of friendly and resourceful professionals committed to work together to produce the best'
    },
    { 
        id: 3, 
        title: 'We go above and beyond for our clients', 
        icon: Handshake, 
        description: 'We are committed to going above and beyond for our clients' 
    }
];

export const industries = [
    {
        id: 1,
        title: 'Start-ups',
        icon: StartUp,
        description: 'Starting out? Build systematic, streamlined operations from the start, across conception, planning.'
    },

    {
        id: 2,
        title: "SME's",
        icon: SmallBusiness,
        description: 'we understand the vital role that Small and Medium-sized Enterprises (SMEs) play in driving innovation, growth, and economic development.'
    },
    {
        id: 3,
        title: 'Enterprise',
        icon: Enterprise,
        description: "we recognize the complexities and challenges that Enterprises face in today's competitive landscape. Our tailored solutions are designed to meet the diverse needs of large-scale businesses, corporations, and organizations"
    },

    {
        id: 4,
        title: 'Sole Partner',
        icon: Entrepreneur,
        description: ' Our mission is to empower entrepreneurs by offering comprehensive resources, expert guidance, and a suite of services tailored to fuel their success'
    }
]

export const aboutQuickLink = [
    {
        link: '/about-us',
        title: 'About Us'
    },
    {
        link: '/work',
        title: 'Work'
    }
    

]

export const ArrowRightAnimation = keyframes`
0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(40px); 
  }
  100% {
    transform: translateX(100px); 
  }
`;

export const wheelAnimation = keyframes`
    to {
        opacity: 0;
        top: 40px;
    }
`;

export const bouncingLoader = keyframes`
    to {
        opacity: 0.1;
        transform: translateY(-16px);
    }
`

export const ArrowDownAnimation = keyframes`
0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40px); 
  }
  100% {
    transform: translateY(100px); 
  }
`;


export const TeamMemberDetails = [
    { 
        name: 'Bob', 
        title: 'CEO & Founder', 
        memberImg: Bob, 
        patternImg: getRandomPattern(), 
        description: 'Brief description of the team placed below their names' 
    },
    { 
        name: 'David', 
        title: 'CEO & Founder', 
        memberImg: David, 
        patternImg: getRandomPattern(), 
        description: 'Brief description of the team placed below their names' 
    },
    { 
        name: 'Nomzamo', 
        title: 'CEO & Founder', 
        memberImg: Nomzamo, 
        patternImg: getRandomPattern(), 
        description: 'Brief description of the team placed below their names' 
    },
    { 
        name: 'Allison', 
        title: 'CEO & Founder', 
        memberImg: Allison, 
        patternImg: getRandomPattern(), 
        description: 'Brief description of the team placed below their names' 
    },
]

export const CarouselResponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7
      },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
}

export const socialIcons = [
    {
        linkText: '216 Media',
        icon: 'LanguageIcon'
    },
    {
        linkText: '00115348400',
        icon: 'CallIcon'
    },
    {
        linkText: '216 Media',
        icon: 'FacebookOutlinedIcon'
    },
    {
        linkText: '@twoonesix_media',
        icon: 'InstagramIcon'
    },
    {
        linkText: '@twoonesix_media',
        icon: 'TwitterIcon'
    },
    {
        linkText: '216Media-EverythingMedia&Marketing',
        icon: 'CopyrightIcon'
    }
]

