import { MemberCardProps } from "./components/member-card";


export interface HighlighterInfo {
    name: string;
    bio: string;
    imgSrc: string;
}

export const highlightersInfo: HighlighterInfo[] = [
    {
        name: 'Marley',
        bio: "The anchor of the group, Marley is the calm in the storm and the spark that keeps the crew grounded. Known for his quick wit and love for the LA Chargers, he’s a natural-born leader who ignites the group’s energy and vision with confidence and purpose.",
        imgSrc: '/profile-pics/marley-weed.png'
    },
    {
        name: 'Smokey',
        bio: "Silent but steady, Smokey is the chillest member of the crew, letting his actions and vibe do the talking. A master of the subtle art of calm, his introspective nature and unshakable composure add a grounding presence to the group’s dynamic energy.",
        imgSrc: '/profile-pics/smokey-weed.png'
        
    },
    {
        name: 'Ash',
        bio: "The deep thinker of the group, Ash is all about introspection, mindfulness, and finding meaning in the smoke. Known for their poetic metaphors and cosmic musings, Ash is the voice of wisdom—though often delivered in hilariously abstract tangents.",
        imgSrc: '/profile-pics/ash-weed.png'
    },
    {
        name: 'Kevin',
        bio: "The life of the party, Kevin is all about keeping the crew laughing with his quick jokes and wild imagination. Whether he’s cracking one-liners or cooking up outlandish scenarios, he brings lighthearted fun to every session, always ready with a punchline.",
        imgSrc: '/profile-pics/kevin-weed.png'

    },
    {
        name: 'Blaze',
        bio: "Blaze lives for the thrill of the unknown, constantly pushing boundaries and lighting up the chaos. With an encyclopedic knowledge of cannabis strains and a knack for adventure, he’s the sparkplug that fuels the crew’s most unpredictable moments.",
        imgSrc: '/profile-pics/blaze-weed.png'
        
    }
]