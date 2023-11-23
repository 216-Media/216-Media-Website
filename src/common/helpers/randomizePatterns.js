import {
    TeamMemberPattern1,
    TeamMemberPattern2,
    TeamMemberPattern3,
    TeamMemberPattern4
} from '@/assets/images';

const imagePatterns = [
    TeamMemberPattern1,
    TeamMemberPattern2,
    TeamMemberPattern3,
    TeamMemberPattern4
]

export const getRandomPattern = () => {
    const randomIndex = Math.floor(Math.random() * imagePatterns.length);
    return imagePatterns[randomIndex];
}