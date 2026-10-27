export const STUDIO_NAME = 'Moonberry Games'

// Placeholder game title: change it here and it updates everywhere
export const GAME_TITLE = 'Ravenshall'
export const TAGLINE = 'Explore a rich and vibrant world as you investigate and exterminate mythical creatures to keep your home town safe'

// Swap '#' for real URLs when they exist
export const LINKS = {
  wishlist: '#',
  discord: '#',
  instagram: 'https://instagram.com/moonberry.games',
  tiktok: 'https://tiktok.com/@moonberrygames',
  presskit: '#',
  hosting: 'https://crunchy.host',
}

// Listed under the Games dropdown in the header
export const games = [{ title: GAME_TITLE, href: '/games/ravenshall' }]

// YouTube/Vimeo embed URL. Takes priority over TRAILER_VIDEO when set
export const TRAILER_URL = ''

// Self-hosted video in public/, played when the seal is pressed. With both empty the poster reads "Trailer coming soon"
export const TRAILER_VIDEO = '/videos/teaser-01.mp4?v=4'

// Product owner shown above the teams on the About page
export const PRODUCT_OWNER = { name: 'Alex', role: 'Product Owner' }

// Imported portraits get content-hashed URLs; Discord avatars live in /images/team/<slug>/
export const teams = [
  {
    slug: 'tech', name: 'Tech',
    lead: { name: 'Pavlos', role: 'Lead Developer' },
    paragraphs: [
      'Every idea sounds great on paper, but Tech makes it work. They are responsible for the back end of our game. All the mechanics, fights and other fun system in the game is designed and made by the Tech department.',
    ],
  },
  {
    slug: 'design', name: 'Design',
    lead: { name: 'Ronnie', role: 'Lead Designer', portrait: ronniePortrait },
    paragraphs: [
      'Being inventive and unique is hard, that’s why we have a Design team! They are responsible for thinking about every part of our game. All the mysteries, fights and workings of the world are designed by them.',
    ],
  },
  {
    slug: 'art', name: 'Art',
    lead: { name: 'Lizet', role: 'Lead Artist', avatar: '/images/team/art/lead.gif' },
    paragraphs: [
      'We want our games to be a feast for the eyes; thus, we have our own Art department! They create the world our players can lose themselves in. They design beautiful lighting, characters and effects that will swoon anyone who lays their eyes upon them.',
    ],
  },
  {
    slug: 'audio', name: 'Audio',
    lead: { name: 'Alex Monster', role: 'Lead Audio Design', portrait: alexPortrait },
    paragraphs: [
      'To make the world really come alive, you need audio. Our Audio department is responsible for every sound in our game. From the cute npc’s running around, the punches being thrown and the creaking trees, the Audio department creates them all.',
    ],
  },
  {
    slug: 'marketing', name: 'Marketing',
    lead: { name: 'Padouk de Bie', role: 'Lead Marketing', portrait: padoukPortrait },
    paragraphs: [
      'We want to share our game with the world, so we need marketing! This department is responsible for bringing outside eyes into our progress and games. They create content for social media, raise funding and go to events to represent our game to our audience.',
    ],
  },
]
import alexPortrait from '../assets/team/alex.webp'
import padoukPortrait from '../assets/team/padouk.webp'
import ronniePortrait from '../assets/team/ronnie.webp'

