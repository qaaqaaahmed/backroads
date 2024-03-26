import tours1 from '../images/tour-1.jpeg'
import tours2 from '../images/tour-2.jpeg'
import tours3 from '../images/tour-3.jpeg'
import tours4 from '../images/tour-4.jpeg'

export const PageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, icon: 'fab fa-facebook', href: 'https://www.twitter.com' },
  { id: 2, icon: 'fab fa-twitter', href: 'https://www.twitter.com' },
  { id: 3, icon: 'fab fa-squarespace', href: 'https://www.twitter.com' },
]

export const servicesAvailable = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw"',
    title: 'amazing comfort',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
  },
]

export const toursdata = [
  {
    id: 1,
    image: tours1,
    date: 'August 26, 2023',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
    location: 'China',
    duration: '6 days',
    price: '$1500',
  },
  {
    id: 2,
    image: tours2,
    date: 'October 26, 2023',
    title: 'Makao Adventure',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
    location: 'Indonesia',
    duration: '11 days',
    price: '$1400',
  },
  {
    id: 3,
    image: tours3,
    date: 'December 26, 2023',
    title: 'Explore Hong Kong',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
    location: 'Hong Kong',
    duration: '4 days',
    price: '$1100',
  },
  {
    id: 4,
    image: tours4,
    date: 'January 26, 2024',
    title: 'Kenya highlights',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.',
    location: 'Kenya',
    duration: '3 days',
    price: '$1200',
  },
]
