import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const concepts = [
  {
    id: 1,
    title: 'Des recettes simplifiées et variées',
    image: '/concepts/concept-1.jpg',
    description: 'Parfaits pour les débutants ou les récalcitrants de la cuisine, les plats présentés sont des recettes originales, mais aussi transformées pour le plaisir de chacun.',
  },
  {
    id: 2,
    title: 'Avec des aliments courants',
    image: '/concepts/concept-2.jpg',
    description: 'Les préparations proposées ne requièrent aucun produit particuler, les ingrédients basiques de la cuisine suffisent pour leur réalisation.',
  },
  {
    id: 3,
    title: 'Pour des repas solo, mais pas que',
    image: '/concepts/concept-3.jpg',
    description: "Les recettes mises à disposition sont adaptables, elles se préparent pour une personne ou toute une tablée. En panne d'idée, leur diversité saura vous régaler.",
  },
  {
    id: 4,
    title: 'A concocter en un rien de temps',
    image: '/concepts/concept-4.jpg',
    description: "Les mets suggérés sont l'idéal pour ne pas perdre de temps en cuisine, grâce à un temps de préparation maximum de 20 minutes. Plus aucune excuse pour ne pas cuisiner soi-même !",
  },
  {
    id: 5,
    title: 'Bon marché',
    image: '/concepts/concept-5.jpg',
    description: "Exécutables avec des denrées ordinaires, c'est également son faible coût qui fait que la cuisine de Snapeats est appréciée ; grâce à des recettes ne dépassant pas les 7 ingrédients.",
  },
  {
    id: 6,
    title: 'Excellentes pour la santé',
    image: '/concepts/concept-6.jpg',
    description: 'Les plats affichés vont séduire les adeptes de la cuisine allégée, mais aussi ceux des repas sains riches en légumes ou encore les personnes qui aiment se faire plaisir, pour leur bien-être mental.',
  },
];

export async function GET() {
  return NextResponse.json(concepts);
}
