import { NextResponse } from 'next/server';

const types = [
  {
    id: 1,
    name: 'Pâtes',
    image: '/types/pates.jpg',
  },
  {
    id: 2,
    name: 'Croques',
    image: '/types/croques.jpg',
  },
  {
    id: 3,
    name: 'Salades',
    image: '/types/salades.jpg',
  },
  {
    id: 4,
    name: 'Tartines',
    image: '/types/tartines.jpg',
  },
  {
    id: 5,
    name: 'Omelettes',
    image: '/types/omelettes.jpg',
  },
  {
    id: 6,
    name: 'Burgers',
    image: '/types/burgers.png',
  },
];

export async function GET() {
  return NextResponse.json(types);
}
