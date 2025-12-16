import day1 from '../assets/images/day/andreas-gucklhorn-mawU2PoJWfU-unsplash.jpg';
import day2 from '../assets/images/day/ethan-robertson-SYx3UCHZJlo-unsplash.jpg';
import day3 from '../assets/images/day/luca-bravo-ii5JY_46xH0-unsplash.jpg';
import night1 from '../assets/images/night/jonatan-pie-3l3RwQdHRHg-unsplash.jpg';
import night2 from '../assets/images/night/jonatan-pie-h8nxGssjQXs-unsplash.jpg';

export const trips = [
  {
    id: 1,
    title: 'Neon Dreams',
    location: 'Hong Kong',
    image: night1,
    date: 'November 2023',
    isNight: true,
    size: 'tall'
  },
  {
    id: 2,
    title: 'Summer in Italy',
    location: 'Amalfi Coast',
    image: day1,
    date: 'June 2024',
    isNight: false,
    size: 'normal'
  },
  {
    id: 3,
    title: 'Midnight in Paris',
    location: 'France',
    image: night2,
    date: 'September 2023',
    isNight: true,
    size: 'wide'
  },
  {
    id: 4,
    title: 'Desert Vibes',
    location: 'Joshua Tree',
    image: day2,
    date: 'March 2024',
    isNight: false,
    size: 'normal'
  },
  {
    id: 5,
    title: 'Nordic Escape',
    location: 'Iceland',
    image: day3,
    date: 'December 2023',
    isNight: false,
    size: 'big'
  }
];
