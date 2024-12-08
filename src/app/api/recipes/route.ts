import { NextResponse } from 'next/server';

const recipes = [
  {
    id: 1,
    name: 'Salade César',
    picture: '/pictures/salade-cesar.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/parmesan.svg',
        name: 'Parmesan',
      },
      {
        img: '/ingredients/croutons.svg',
        name: 'Croûtons',
      },
      {
        img: '/ingredients/assaisonnement.svg',
        name: 'Assaisonnement',
      },
    ],
    steps: [
      [1, 'Laver, essorer et tailler la salade en chiffonnade'],
      [2, 'Couper les tomates cerise en 2'],
      [3, 'Trancher du parmesan en lamelles'],
      [4, 'Disposer le tout dans une assiette, sans oublier les croûtons, et assaisonner à votre convenance'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 2,
    name: 'Original hamburger',
    picture: '/pictures/original-hamburger.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 pain à burger',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak haché',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/4 tomate',
      },
      {
        img: '/ingredients/oignon.svg',
        name: '1/4 oignon',
      },
      {
        img: '/ingredients/sauce.svg',
        name: 'Sauce',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Cuire le steak dans une poêle à cuisson souhaitée'],
      [3, "Éplucher et couper le 1/4 d'oignon et le 1/4 de tomage en rondelles"],
      [4, 'Laver, essorer et couper une feuille de salade un peu plus large que le pain à burger'],
      [5, 'Une fois le steack cuit, assembler chaque élément et mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 3,
    name: 'Linguines à la carbonara',
    picture: '/pictures/pates-carbonara.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/spaghettis.svg',
        name: 'Pates linguines',
      },
      {
        img: '/ingredients/bacon.svg',
        name: 'Lard',
      },
      {
        img: '/ingredients/rape.svg',
        name: 'Parmesan rapé',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Persil',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'En même temps que les linguines cuisent, faire revenir les lardons dans une poêle'],
      [3, 'Une fois  le tout cuit, disposer dans une assiettes les pâtes et par-dessus, les lardons'],
      [4, 'Parsemer de parmesan râpé et de persil ciselé'],
    ],
    categories: ['pâtes', 'plaques'],
  },
  {
    id: 4,
    name: 'Tartines avocat oeuf mollet tomates',
    picture: '/pictures/tartines-avocat-oeufmollet-tomates.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '2 tranches de pain de seigle',
      },
      {
        img: '/ingredients/oeuf.svg',
        name: '1 oeuf',
      },
      {
        img: '/ingredients/avocat.svg',
        name: '1 avocat',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Herbes aromatiques',
      },
    ],
    steps: [
      [1, "Faires chauffer de l'eau et à ébullition, y incorporer l'oeuf pendant 6 minutes"],
      [2, "Couper les tomates cerise en 2 et écraser l'avocat"],
      [3, 'Faire chauffer les tranches de pain de seigle dans un grille-pain'],
      [4, "Tartiner les tranches de pain d'avocat et disposer par-dessus l'oeuf mollet coupé en 2 et les tomates cerise"],
      [5, 'Assaisonner à votre convenance, notamment avec des herbes aromatiques'],
    ],
    categories: ['tartines', 'plaques'],
  },
  {
    id: 5,
    name: 'Croques monsieur classique',
    picture: '/pictures/croque-monsieur.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie',
      },
      {
        img: '/ingredients/jambon.svg',
        name: '2 tranche de jambon',
      },
      {
        img: '/ingredients/emmental.svg',
        name: "4 tranches d'emmental",
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, "Empiler 1 tranche de pain de mie, 1 d'emmental, 1 de jambon, 1 d'emmental et 1 de pain de mie"],
      [3, 'Faire dorer le tout au four pendant 10 minutes'],
    ],
    categories: ['croques', 'four'],
  },
  {
    id: 6,
    name: 'Omelette au chorizo',
    picture: '/pictures/omelette-chorizo.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '3 oeufs',
      },
      {
        img: '/ingredients/lait.svg',
        name: '1 càs de lait',
      },
      {
        img: '/ingredients/chorizo.svg',
        name: 'Tranches de chorizo',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu vif'],
      [2, 'Battre les oeufs dans un bol et rajouter le lait'],
      [3, 'Découper quelques tranches de chorizo'],
      [4, 'Incorporer le tout dans la poêle pendant 6 minutes en veillant à retourner de face à mi-temps'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 7,
    name: 'Original cheeseburger',
    picture: '/pictures/original-cheeseburger.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: 'Pains à burger brioché',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak haché',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/4 tomate',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/pickle.svg',
        name: 'Pickles',
      },
      {
        img: '/ingredients/emmental.svg',
        name: '1 tranche de cheddar',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Faire cuire le steak à cuisson souhaitée'],
      [3, 'Couper le 1/4 de tomate en rondelles'],
      [4, "Assembler le tout en n'oubliant pas d'ajouter des pickles et une sauce"],
      [5, 'Mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 8,
    name: 'Tartines de fromage frais et tomates',
    picture: '/pictures/tartines-fromagefrais-tomates.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/pain.svg',
        name: '1 baguette de pain',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Fromage frais',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerises',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Herbes de provence',
      },
    ],
    steps: [
      [1, 'Couper la baguette de pain en 2, puis chaque partie en 2 également sur la largeur'],
      [2, 'Couper les tomates cerise en rondelles'],
      [3, 'Passer les morceaux de pain au grille-pain et les tartiner de fromage frais'],
      [4, "Ajouter par dessus les rondelles de tomates et assaisonner d'herbes de provence"],
    ],
    categories: ['tartines', 'assiette'],
  },
  {
    id: 9,
    name: 'Croques bacon cheddar',
    picture: '/pictures/croques-bacon-cheddar.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie',
      },
      {
        img: '/ingredients/bacon.svg',
        name: '4 tranches de bacon',
      },
      {
        img: '/ingredients/emmental.svg',
        name: '4 tranches de cheddar',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Passer le bacon à la poêle'],
      [3, 'Empiler 1 tranche de pain de mie, 1 de cheddar, 2 de bacon, 1 de cheddar et 1 de pain de mie'],
      [4, 'Faire dorer le tout au four pendant 10 minutes'],
    ],
    categories: ['croques', 'four', 'plaques'],
  },
  {
    id: 10,
    name: 'Oeufs brouillés à la ciboulette',
    picture: '/pictures/oeufsbrouilles-ciboulette.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '2 oeufs',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Ciboulette',
      },
      {
        img: '/ingredients/assaisonnement.svg',
        name: 'Assaisonnement',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu vif'],
      [2, 'Incorper les oeufs dans la poêle chaude en les remuant avec un fouet'],
      [3, 'Disposer dans une assiette'],
      [4, 'Parsemer de ciboulette ciselée et assaisonner à votre convenance'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 11,
    name: 'Salade concombre poivrons feta tomates',
    picture: '/pictures/salade-concombre-poivrons-feta-tomates.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/des.svg',
        name: 'Dés de feta',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/poivron.svg',
        name: '2 poivrons',
      },
    ],
    steps: [
      [1, 'Laver et essorer la salade'],
      [2, 'Couper les tomates cerise en 2 et les poivrons en lamelles'],
      [3, "Couper la feta en cubes si ce n'est pas déjà le cas"],
      [4, 'Disposer les ingrédients dans une assiette et assaisonner à votre convenance'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 12,
    name: 'Tagliatelles au parmesan',
    picture: '/pictures/pates-parmesan.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/spaghettis.svg',
        name: 'Pates tagliatelles',
      },
      {
        img: '/ingredients/rape.svg',
        name: 'Parmesan rapé',
      },
      {
        img: '/ingredients/basilic.svg',
        name: 'Basilic',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'Disposer les tagliatelles chaudes dans une assiette'],
      [3, 'Saupoudrer les pâtes de parmesan râpé'],
      [4, 'Ajouter quelques feuilles de basilic'],
    ],
    categories: ['pâtes', 'plaques'],
  },
  {
    id: 13,
    name: 'Croques monsieur oeuf',
    picture: '/pictures/croque-monsieur-oeuf.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie brioché',
      },
      {
        img: '/ingredients/jambon.svg',
        name: '2 tranches de jambon',
      },
      {
        img: '/ingredients/oeuf-plat.svg',
        name: '2 oeufs',
      },
      {
        img: '/ingredients/rape.svg',
        name: 'Emmental rapé',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Faire cuire les oeufs façon au plat dans une poêle'],
      [3, 'Beurrer les tranches de pain de mie brioché'],
      [4, "Assembler le tout avec de l'emmental râpé au-dessus"],
      [5, 'Faire dorer le tout au four pendant 10 minutes'],
    ],
    categories: ['croques', 'four', 'plaques'],
  },
  {
    id: 14,
    name: 'Tartines avocat radis',
    picture: '/pictures/tartines-avocat-radis.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '2 tranches de pain de mie',
      },
      {
        img: '/ingredients/avocat.svg',
        name: '1/2 avocat',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: 'Radis',
      },
      {
        img: '/ingredients/graines.svg',
        name: 'Graines de courge',
      },
    ],
    steps: [
      [1, 'Écraser le 1/2 avocat en purée et le tartiner sur les tranches de pain de mie toastées'],
      [2, 'Couper les radis en rondelles et les ajouter à la préparation'],
      [3, 'Parsemer le tout de graines de courge'],
    ],
    categories: ['tartines', 'assiette'],
  },
  {
    id: 15,
    name: 'Hamurger boeuf bacon',
    picture: '/pictures/hamburger-boeuf-bacon.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 Pain à burger',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak haché',
      },
      {
        img: '/ingredients/bacon.svg',
        name: '2 tranches de bacon',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/4 tomate',
      },
      {
        img: '/ingredients/oignon.svg',
        name: '1/4 oignon rouge',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade mache',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Cuire le steak dans une poêle à cuisson souhaitée et le bacon également'],
      [3, "Laver et essorer la salade et couper le 1/4 de tomate et d'oignon rouge en rondelles"],
      [4, 'Une fois le tout cuit, assembler et mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 16,
    name: 'Pennes à la bolognaise',
    picture: '/pictures/pates-bolognaise.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pates.svg',
        name: 'Pates pene',
      },
      {
        img: '/ingredients/viande-hachee.svg',
        name: 'Viande hachée',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/basilic.svg',
        name: 'Basilic',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'Faire revenir la viande hanchée dans une poêle avec les tomates cerise coupées en 2'],
      [3, 'Une fois  le tout cuit, disposer dans une assiettes les pâtes, ensuite la viande'],
      [4, 'Ajouter des feuilles de basilic'],
    ],
    categories: ['pâtes', 'plaques'],
  },
  {
    id: 17,
    name: 'Salade de poulet et graines de sésame',
    picture: '/pictures/salade-poulet-sesame.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/poulet.svg',
        name: '1 filet de poulet',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1 tomate',
      },
      {
        img: '/ingredients/oignon.svg',
        name: '1/4 oignon rouge',
      },
      {
        img: '/ingredients/graines.svg',
        name: 'Graines de sésame',
      },
      {
        img: '/ingredients/assaisonnement.svg',
        name: 'Assaisonnement',
      },
    ],
    steps: [
      [1, "Faire cuire le poulet dans une poêle s'il n'est pas déjà tout prêt en morceaux"],
      [2, 'Laver, essorer et tailler la salade'],
      [3, "Couper la tomate en quartiers et émincer le 1/4 d'oignon rouge"],
      [4, 'Disposer le tout dans une assiette'],
      [5, 'Parsemer de graines de sésame et assaisonner à votre convenance'],
    ],
    categories: ['salades', 'assiette', 'plaques'],
  },
  {
    id: 18,
    name: 'Omelette tomate avocat',
    picture: '/pictures/omelette-tomate-avocat.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '3 oeufs',
      },
      {
        img: '/ingredients/lait.svg',
        name: '1 càs de lait',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/2 tomate',
      },
      {
        img: '/ingredients/avocat.svg',
        name: '1/2 avocat',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu vif'],
      [2, 'Battre les oeufs dans un bol et rajouter le lait'],
      [3, 'Couper la 1/2 tomate et le 1/2 avocat en rondelles'],
      [4, 'Incorporer les oeufs battus dans la poêle pendant 6 minutes en veillant à retourner de face à mi-temps'],
      [5, 'Assembler le tout et assaisonner les légumes'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 19,
    name: 'Spaghettis à la sauce tomate',
    picture: '/pictures/pates-saucetomate.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/spaghettis.svg',
        name: 'Pates spaghettis',
      },
      {
        img: '/ingredients/sauce-tomate.svg',
        name: 'Sauce tomate',
      },
      {
        img: '/ingredients/rape.svg',
        name: 'Emmental rapé',
      },
      {
        img: '/ingredients/basilic.svg',
        name: 'Basilic',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'Faire chauffer dans une autre casserole la sauce tomate'],
      [3, 'Une fois  le tout cuit et bien chaud, disposer dans une assiettes les pâtes et par-dessus, la sauce tomate'],
      [4, "Parsemer d'emmental râpé et de feuilles de basilic"],
    ],
    categories: ['pâtes', 'casserole'],
  },
  {
    id: 20,
    name: 'Club sandwich complet',
    picture: '/pictures/club-sandwich-complet.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '2 tranches de pain de mie',
      },
      {
        img: '/ingredients/emmental.svg',
        name: '1 tranche de cheddar',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/2 tomate',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: '1/4 concombre',
      },
      {
        img: '/ingredients/jambon.svg',
        name: '1 tranche de jambon',
      },
      {
        img: '/ingredients/oignon.svg',
        name: '1/4 oignon rouge',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
    ],
    steps: [
      [1, 'Couper la 1/2 tomate et le 1/4 de concombre en rondelles'],
      [2, "Couper le jambon en 2 et émincer le 1/4 d'oignon rouge"],
      [3, 'Laver, essorer et couper de la salade'],
      [4, 'Passer les tranches de pain de mie au grille-pain'],
      [5, 'Assembler les éléments et saucer à votre convenance'],
    ],
    categories: ['croques', 'assiette'],
  },
  {
    id: 21,
    name: 'Salade César au concombre et olives',
    picture: '/pictures/salade-concombre-olivesnoires.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Mélange de salade',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: '1/2 concombre',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/olives.svg',
        name: 'Olives noires',
      },
      {
        img: '/ingredients/croutons.svg',
        name: 'Croûtons',
      },
      {
        img: '/ingredients/rape.svg',
        name: 'Emmental rapé',
      },
    ],
    steps: [
      [1, 'Laver et essorer le mélange de salade'],
      [2, 'Couper les tomates cerise en 2'],
      [3, "Raper de l'emmental"],
      [4, 'Disposer le tout dans une assiette, sans oublier les croûtons et les olives, et assaisonner à votre convenance'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 22,
    name: 'Tartines de tomate et saumon fumé',
    picture: '/pictures/tartines-tomate-saumonfume.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/pain.svg',
        name: '4 tranches de pain tranché',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Fromage frais',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1 tomate',
      },
      {
        img: '/ingredients/poisson.svg',
        name: '2 tranches de saumon fumé',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Coriande',
      },
    ],
    steps: [
      [1, 'Tartiner les tranches de pain de fromage frais'],
      [2, 'Couper la tomate en rondelles et les disposer sur la préparation'],
      [3, 'Ajouter le saumon fumé en chiffonade'],
      [4, 'Ajouter par dessus la coriandre et assaisonner à votre convenance'],
    ],
    categories: ['tartines', 'assiette'],
  },
  {
    id: 23,
    name: 'Oeufs brouillés à la tomate',
    picture: '/pictures/oeufs-brouilles-tomate.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '2 oeufs',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1 tomate',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Coriandre',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu vif'],
      [2, 'Couper la tomates en quartiers et les ajouter aux oeufs brouillés déjà cuits'],
      [3, 'Incorper les oeufs dans la poêle chaude en les remuant avec un fouet'],
      [4, 'Disposer le tout dans une assiette et mélanger'],
      [5, 'Parsemer de coriandre ciselée et assaisonner à votre convenance'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 24,
    name: 'Cheeseburger au steak de poulet',
    picture: '/pictures/cheeseburger-steak-poulet.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 Pain à burger',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak de poulet',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/4 tomate',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: '1/4 concombre',
      },
      {
        img: '/ingredients/emmental.svg',
        name: '1 tranche de cheddar',
      },
      {
        img: '/ingredients/sauce.svg',
        name: 'Sauce burger',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Faire chauffer dans une poêle le steak de poulet'],
      [3, 'Couper le 1/4 de tomate et le 1/4 de concombre en lamelles'],
      [4, 'Assembler le tout sans oublier la sauce burger'],
      [5, 'Mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 25,
    name: 'Croques tout fromage',
    picture: '/pictures/croques-tout-fromage.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie',
      },
      {
        img: '/ingredients/emmental.svg',
        name: "4 tranches d'emmental",
      },
      {
        img: '/ingredients/emmental.svg',
        name: '2 tranches de cheddar',
      },
    ],
    steps: [
      [1, 'Faire chauffer votre poêle beurrée à feu vif'],
      [2, "Assembler les croques en intervertissant bien 1 tranche d'emmental, 1 tranche de cheddar et une autre tranche d'emmental"],
      [3, 'Chauffer le tout dans la poêle pendant 2 minutes de chaque côté'],
    ],
    categories: ['croques', 'casserole'],
  },
  {
    id: 26,
    name: 'Tartines avocat oeufs pochés',
    picture: '/pictures/tartines-avocat-oeufpoche.png',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain.svg',
        name: '2 tranches de pain',
      },
      {
        img: '/ingredients/oeuf-plat.svg',
        name: '2 oeufs',
      },
      {
        img: '/ingredients/avocat.svg',
        name: '1 avocat',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau et y incorporer les oeufs sans sa coquille pendant 3 minutes"],
      [2, "Couper l'avocat en rondelles et passer les tranches de pain au grille-pain"],
      [3, 'Assembler les tartines'],
    ],
    categories: ['tartines', 'casserole'],
  },
  {
    id: 27,
    name: 'Hamburger au jambon de pays',
    picture: '/pictures/hamburger-boeuf-jambonpays.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 Pain à burger',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak haché',
      },
      {
        img: '/ingredients/bacon.svg',
        name: '1 tranche de jambon de pays',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade roquette',
      },
      {
        img: '/ingredients/sauce.svg',
        name: 'Sauce au roquefort',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Cuire le steak dans une poêle à cuisson souhaitée et laver et essorer la roquette'],
      [3, "Une fois le steack cuit, assembler chaque élément, sans oublier d'ajouter la sauce"],
      [4, 'Mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 28,
    name: 'Omelette au poulet et épinards',
    picture: '/pictures/omelette-poulet-epinards.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '3 oeufs',
      },
      {
        img: '/ingredients/lait.svg',
        name: '1 càs de lait',
      },
      {
        img: '/ingredients/poulet.svg',
        name: '1 filet de poulet',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Epinards',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu moyen'],
      [2, 'Battre les oeufs dans un bol et rajouter le lait'],
      [3, 'Couper le filet de poulet en morceaux et le faire chauffer'],
      [4, 'Rajouter le mélange liquide dans la poêle pendant 6 minutes en veillant à retourner de face à mi-temps'],
      [5, 'A 2 minutes avant la fin de la cuisson, adjoindre les épinards dans la poêle'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 29,
    name: 'Salade tomates avocat fromage frais',
    picture: '/pictures/salade-tomate-avocat-fromagefrais.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Mélange de salade',
      },
      {
        img: '/ingredients/avocat.svg',
        name: '1 avocat',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Fromage frais',
      },
      {
        img: '/ingredients/graines.svg',
        name: 'Mélange de graines',
      },
    ],
    steps: [
      [1, 'Laver et essorer le mélange de salade'],
      [2, 'Couper les tomates cerise en 2'],
      [3, "Écraser l'avocat et le fromage frais et en faire séparément des morceaux"],
      [4, 'Disposer le tout dans une assiette, parsemer de graines et assaisonner si envie'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 30,
    name: 'Conchiglionis farcies à la viande haché',
    picture: '/pictures/pates-facies-boeuf.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pates.svg',
        name: 'Conchiglionis pates',
      },
      {
        img: '/ingredients/viande-hachee.svg',
        name: 'Viande hachée',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Coriandre',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'En même temps que les conchiglionis cuisent, faire revenir la viande hachée dans une poêle'],
      [3, 'Une fois  le tout cuit, remplir les conchiglionis de viande'],
      [4, 'Parsemer de coriandre ciselée'],
    ],
    categories: ['pâtes', 'plaques'],
  },
  {
    id: 31,
    name: 'Croques au jambon cru',
    picture: '/pictures/croques-jamboncru.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie',
      },
      {
        img: '/ingredients/bacon.svg',
        name: '2 tranches de jambon cru',
      },
      {
        img: '/ingredients/emmental.svg',
        name: "2 tranches d'emmental",
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, "Empiler 1 tranche de pain de mie, 1 d'emmental, 1 de jambon cru plié en 2, de la salade et 1 tranche de pain de mie"],
      [3, 'Faire dorer au four pendant 10 minutes'],
    ],
    categories: ['croques', 'four'],
  },
  {
    id: 32,
    name: "Tartines d'oeufs sur le plat",
    picture: '/pictures/tartines-oeufsplats.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf-plat.svg',
        name: '2 oeufs',
      },
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '2 tranches de pain de mie',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Fromage frais',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Herbes de provence',
      },
    ],
    steps: [
      [1, 'Faire chauffer votre poêle huilée à feu moyen et y mettre les oeufs'],
      [2, 'Passer les tranches de pain de mie au grille-pain'],
      [3, 'Tartiner les tranches de pain de mie de fromage frais'],
      [4, 'Une fois les oeufs cuits, les ajouter sur les tranches de pain de mie'],
    ],
    categories: ['tartines', 'plaques'],
  },
  {
    id: 33,
    name: 'Hamburger au concombre et chou',
    picture: '/pictures/hamburger-concombre-chou.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 Pain à burger',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak haché',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: '1/4 concombre',
      },
      {
        img: '/ingredients/chou.svg',
        name: '1/6 Chou rouge',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Cuire le steak dans une poêle à cuisson souhaitée'],
      [3, 'Laver et essorer de la salade et tailler le 1/6 de chou'],
      [4, "Une fois le steack cuit, assembler les éléments, sans oublier d'ajouter la sauce"],
      [5, 'Mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 34,
    name: 'Omelette tomates feta',
    picture: '/pictures/omelette-tomates-feta.jpg',
    duration: 50,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '3 oeufs',
      },
      {
        img: '/ingredients/lait.svg',
        name: '1 càs de lait',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/des.svg',
        name: 'Feta',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu vif'],
      [2, 'Battre les oeufs dans un bol et rajouter le lait'],
      [3, 'Couper les tomates cerise en 2 et la feta en morceaux émiettés'],
      [4, 'Incorporer le mélange liquide la poêle pendant 6 minutes en veillant à retourner de face à mi-temps'],
      [5, "Servir le tout dans une assiette avec le l'omelette en dessous"],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 35,
    name: 'Salade dés de fromage et pignons',
    picture: '/pictures/salade-fromage-pignons.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Mélange de salade',
      },
      {
        img: '/ingredients/des.svg',
        name: 'Dés de fromage',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/graines.svg',
        name: 'Pignons de pin',
      },
    ],
    steps: [
      [1, 'Laver, essorer et disposer le mélange de salade dans une assiette'],
      [2, "Couper les tomates cerise en 2 et les ajouter à l'assiette"],
      [3, 'Parsemer de pignons de pin et assaisonner à votre convenance'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 36,
    name: 'Spaghettis au poulet',
    picture: '/pictures/pates-carbonara.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/spaghettis.svg',
        name: 'Pates spaghettis',
      },
      {
        img: '/ingredients/poulet.svg',
        name: '1 filet de poulet',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Crème fraîche',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Herbes aromatiques',
      },
      {
        img: '/ingredients/basilic.svg',
        name: 'Basilic',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'Émincer le filet de poulet et le faire cuire dans une poêle avec la crème fraîche'],
      [3, 'Une fois  le tout cuit, disposer dans une assiette en mélangeant et rajouter le basilic'],
    ],
    categories: ['pâtes', 'plaques'],
  },
  {
    id: 37,
    name: 'Linguines aux crevettes',
    picture: '/pictures/pates-crevettes.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/spaghettis.svg',
        name: 'Pates linguines',
      },
      {
        img: '/ingredients/crevette.svg',
        name: 'Crevettes',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Crème fraîche',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Coriandre',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'En même temps que les linguines cuisent, faire dorer les crevettes dans une poêle avec la crème fraîche'],
      [3, 'Une fois  le tout cuit, disposer dans une assiettes en mélangeant avec de la coriandre'],
    ],
    categories: ['pâtes', 'plaques'],
  },
  {
    id: 38,
    name: 'Hamburger avec oeuf sur le plat',
    picture: '/pictures/hamburger-oeuf.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 pain à burger',
      },
      {
        img: '/ingredients/steak.svg',
        name: '1 steak haché',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/oeuf-plat.svg',
        name: '1 oeuf',
      },
      {
        img: '/ingredients/oignon.svg',
        name: '1/4 oignon rouge',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C et cuire le steak dans une poêle à cuisson souhaitée'],
      [2, "Couper le 1/4 d'oignon rouge en rondelles et le faire revenir dans un poêle avec l'oeuf cuit façon au plat"],
      [3, 'Laver, essorer et couper la salade'],
      [4, 'Une fois le steack cuit, assembler les éléments et mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 39,
    name: 'Croques au chorizo et cheddar',
    picture: '/pictures/croques-chorizo-cheddar.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie',
      },
      {
        img: '/ingredients/chorizo.svg',
        name: '4 tranches de chorizo large',
      },
      {
        img: '/ingredients/emmental.svg',
        name: '2 tranches de cheddar',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Empiler 1 tranche de pain de mie, 1 de cheddar, 2 tranches de chorizo et 1 de pain de mie'],
      [3, 'Faire dorer le tout au four pendant 10 minutes'],
    ],
    categories: ['croques', 'four'],
  },
  {
    id: 40,
    name: 'Oeuf sur le plat et oignons',
    picture: '/pictures/oeuf-oignons.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf-plat.svg',
        name: '1 oeuf',
      },
      {
        img: '/ingredients/oignon.svg',
        name: '1 oignon',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
    ],
    steps: [
      [1, 'Faire chauffer votre poêle huilée à feu moyen et y incorporer les oignons émincés'],
      [2, "Faire cuire l'oeuf façon au plat"],
      [3, 'Laver et essorer la salade'],
      [4, 'Disposer la préparation dans une assiette'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 41,
    name: 'Salade de crevettes et poivron',
    picture: '/pictures/salade-crevettes-poivron.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/crevette.svg',
        name: 'Crevettes',
      },
      {
        img: '/ingredients/poivron.svg',
        name: '1 poivron',
      },
      {
        img: '/ingredients/menthe.png',
        name: 'Menthe',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Coriandre',
      },
      {
        img: '/ingredients/graines.svg',
        name: 'Noix de cajou nature',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Pouces de soja',
      },
    ],
    steps: [
      [1, 'Laver, essorer et tailler la salade en chiffonnade'],
      [2, 'Couper le pouvrons en lanières'],
      [3, 'Écraser les noix de cajou en miettes'],
      [4, 'Mélanger le tout dans une assiette et assaisonner à votre convenance'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 42,
    name: 'Tartines avocat jambon cru',
    picture: '/pictures/tartines-avocat-jamboncru.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '4 tranches de pain de mie',
      },
      {
        img: '/ingredients/avocat.svg',
        name: '1 avocat',
      },
      {
        img: '/ingredients/jambon.svg',
        name: '4 tranches de jambon cru',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Fromage frais',
      },
      {
        img: '/ingredients/rape.svg',
        name: 'Emmental rapé',
      },
    ],
    steps: [
      [1, "Couper l'avocat en morceaux et tartiner les tranches de pain de mie de fromage frais"],
      [2, "Disposer sur les tranches de pain de mie le jambon cru et les morceaux d'avocat"],
      [3, "Parsemer le tout d'emmental rapé"],
    ],
    categories: ['tartines', 'assiette'],
  },
  {
    id: 43,
    name: 'Hamburger au poulet frit',
    picture: '/pictures/hamburger-pouletfrit.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/four.svg',
    ingredients: [
      {
        img: '/ingredients/pain-burger.svg',
        name: '1 pain à burger',
      },
      {
        img: '/ingredients/poulet.svg',
        name: '1 poulet pané',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/sauce.svg',
        name: 'Sauce',
      },
    ],
    steps: [
      [1, 'Préchauffer votre four à 180° C'],
      [2, 'Faire frire le blanc de poulet pané dans une poêle huilée à feu moyen'],
      [3, 'Assembler le tout en veillant à bien ajouter la sauce de votre choix'],
      [4, 'Mettre au four pendant 4 minutes'],
    ],
    categories: ['burgers', 'four', 'plaques'],
  },
  {
    id: 44,
    name: 'Omelette au poivron',
    picture: '/pictures/omelette-poivron.jpg',
    duration: 15,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/oeuf.svg',
        name: '3 oeufs',
      },
      {
        img: '/ingredients/lait.svg',
        name: '1 càs de lait',
      },
      {
        img: '/ingredients/poivron.svg',
        name: '1 poivron',
      },
    ],
    steps: [
      [1, 'Chauffer votre poêle huilée à feu vif'],
      [3, 'Couper le poivrons en morceaux'],
      [2, 'Battre les oeufs dans un bol et rajouter le lait'],
      [4, 'Incorporer le tout dans la poêle pendant 6 minutes en veillant à retourner de face à mi-temps'],
    ],
    categories: ['omelettes', 'plaques'],
  },
  {
    id: 45,
    name: 'Tartines oeufs pochés tomate',
    picture: '/pictures/tartines-oeufpoche-tomate.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '2 tranches de pain de mie',
      },
      {
        img: '/ingredients/oeuf-plat.svg',
        name: '2 oeufs',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1 tomate',
      },
      {
        img: '/ingredients/herbes.svg',
        name: 'Ciboulette',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau et y incorporer les oeufs sans leur coquille pendant 3 minutes"],
      [2, 'Couper la tomates en rondelles'],
      [3, 'Faire chauffer les tranches de pain de mie dans un grille-pain et les beurrer légèrement'],
      [4, 'Disposer par-dessus les rondelles de tomate et les oeufs pochés'],
      [5, 'Assaisonner à votre convenance, notamment avec de la ciboulette ciselée'],
    ],
    categories: ['tartines', 'assiette', 'plaques'],
  },
  {
    id: 46,
    name: 'Salade fraîcheur',
    picture: '/pictures/salade-fraicheur.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/assiette.svg',
    ingredients: [
      {
        img: '/ingredients/salade.svg',
        name: 'Mélange de salades',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: '1/4 concombre',
      },
      {
        img: '/ingredients/assaisonnement.svg',
        name: 'Assaisonnement',
      },
    ],
    steps: [
      [1, 'Laver et essorer la salade et la disposer dans une assiette'],
      [2, "Couper les tomates cerise en 2, le 1/4 de concombre en rondelles et les rajouter dans l'assiette"],
      [3, 'Assaisonner à votre convenance et mélanger le tout'],
    ],
    categories: ['salades', 'assiette'],
  },
  {
    id: 47,
    name: 'Croque au poulet complet',
    picture: '/pictures/croques-pouletcomplet.jpg',
    duration: 10,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/pain-de-mie.svg',
        name: '3 tranches de pain de mie',
      },
      {
        img: '/ingredients/poulet.svg',
        name: '1 filet de poulet',
      },
      {
        img: '/ingredients/oeuf.svg',
        name: '1 oeuf',
      },
      {
        img: '/ingredients/tomate.svg',
        name: '1/2 tomate',
      },
      {
        img: '/ingredients/rondelles.svg',
        name: '1/4 de concombre',
      },
      {
        img: '/ingredients/salade.svg',
        name: 'Salade',
      },
      {
        img: '/ingredients/creme.svg',
        name: 'Fromage frais',
      },
    ],
    steps: [
      [1, 'Couper la 1/2 tomate et le 1/4 de concombre en rondelles'],
      [2, "Battre l'oeuf dans un bol et le faire cuire dans une poêle à feu vif"],
      [3, 'Laver, essorer et couper une feuille de salade'],
      [4, 'Passer les tranches de pain de mie au grille-pain et les tartiner de fromage frais'],
      [5, 'Assembler les éléments'],
    ],
    categories: ['croques', 'plaques'],
  },
  {
    id: 48,
    name: 'Spaghettis au chorizo',
    picture: '/pictures/pates-chorizo.jpg',
    duration: 20,
    cooking_method: '/cooking_methods/casserole.svg',
    ingredients: [
      {
        img: '/ingredients/spaghettis.svg',
        name: 'Pates spaghettis',
      },
      {
        img: '/ingredients/chorizo.svg',
        name: 'Chorizo',
      },
      {
        img: '/ingredients/tomates-cerise.svg',
        name: 'Tomates cerise',
      },
      {
        img: '/ingredients/basilic.svg',
        name: 'Basilic',
      },
    ],
    steps: [
      [1, "Faire bouillir de l'eau salée et y incorporer les pâtes jusqu'à cuisson al dente"],
      [2, 'Couper du chorizo en rondelles et le faire cuire dans une poêle à feu moyen avec les tomates cerises coupées en 2'],
      [3, 'Une fois  le tout cuit, disposer dans une assiettes en mélangeant et rajouter le basilic'],
    ],
    categories: ['pâtes', 'plaques'],
  },
];

export async function GET() {
  return NextResponse.json(recipes);
}
