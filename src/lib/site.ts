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
      'Builds gameplay systems, implements features, and handles the technical side of development, including bug fixes and performance improvements',
    ],
  },
  {
    slug: 'design', name: 'Design',
    lead: { name: 'Ronnie', role: 'Lead Designer', portrait: ronniePortrait },
    paragraphs: [
      'Develops mechanics, levels, and encounters, using prototypes and playtesting to refine how the game plays',
    ],
  },
  {
    slug: 'art', name: 'Art',
    lead: { name: 'Lizet', role: 'Lead Artist', avatar: '/images/team/art/lead.gif' },
    paragraphs: [
      'Shapes the game’s visual style and creates characters, environments, and props',
    ],
  },
  {
    slug: 'audio', name: 'Audio',
    lead: { name: 'Alex Monster', role: 'Lead Audio Design', portrait: alexPortrait },
    paragraphs: [
      'Creates music and sound effects that set the mood and help players understand what’s happening around them',
    ],
  },
  {
    slug: 'marketing', name: 'Marketing',
    lead: { name: 'Padouk de Bie', role: 'Lead Marketing', portrait: padoukPortrait },
    paragraphs: [
      'Shares development updates, creates content for the website and social channels, and introduces Ravenshall to new players',
    ],
  },
]
import alexPortrait from '../assets/team/alex.webp'
import padoukPortrait from '../assets/team/padouk.webp'
import ronniePortrait from '../assets/team/ronnie.webp'

