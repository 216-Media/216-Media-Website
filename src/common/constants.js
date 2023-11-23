import { 
    Bob,
    Allison,
    Nomzamo,
    David
} from "@/assets/images"


import {
    getRandomPattern
} from '@/common/helpers/randomizePatterns';



export const Colors = {
    White: '#FFFFFF',
    Grey: '#808080',
    HavelockBlue: '#429DD6',
    AZTEC: '#070A0A',
    Lemon: '#F8EF22',
    HollywoodCerise: '#EB058C',
    SkyBlue: '#E2F0F9',
    BlackOpac: 'rgba(0, 0, 0, 0.6)'
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
    '216 HEALTH'
]

export const TeamItems = [
    'LEADERS',
    'INNOVATORS',
    'DESIGNERS',
    'THINKERS',
    'DOERS'
];


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
        link: '216 Media',
        icon: LanguageIcon
    },
    {
        link: '00115348400',
        icon: CallIcon
    },
    {
        link: '216 Media',
        icon: FacebookOutlinedIcon
    },
    {
        link: '@twoonesix_media',
        icon: InstagramIcon
    },
    {
        link: '@twoonesix_media',
        icon: TwitterIcon
    },
    {
        link: '216Media-EverythingMedia&Marketing',
        icon: CopyrightIcon
    }
]