// Donnée en mode bouchon - mock qui simule ce que l'on aurait dans la BDD

import { Article } from "../models/article.model";

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Réduire son empreinte carbone au quotidien',
        category: 'general',
        impact: 20,
        description: 'Adoptez de petites habitudes simples pour diminuer votre impact quotidien.',
        imageUrl: 'assets/images/carbone-quotidien.jpg',
        featured: true
    },
    {
        id: 2,
        title: 'Prendre le train plutôt que l’avion',
        category: 'transport',
        impact: 80,
        description: 'Pour les voyages de moins de 1000 km, privilégier le train permet de réduire fortement vos émissions.',
        imageUrl: 'assets/images/train-voyage.jpg',
        featured: false
    },
    {
        id: 3,
        title: 'Manger local et de saison',
        category: 'food',
        impact: 50,
        description: 'Achetez des fruits et légumes de saison et de votre région pour réduire le transport et la production d’énergie.',
        imageUrl: 'assets/images/local-food.jpg',
        featured: false
    },
    {
        id: 4,
        title: 'Éteindre les appareils en veille',
        category: 'general',
        impact: 10,
        description: 'Débranchez vos appareils électroniques ou utilisez une multiprise avec interrupteur.',
        imageUrl: 'assets/images/electricite.jpg',
        featured: false
    },
    {
        id: 5,
        title: 'Limiter la viande rouge',
        category: 'food',
        impact: 70,
        description: 'Réduire votre consommation de viande rouge a un impact très positif sur votre empreinte carbone.',
        imageUrl: 'assets/images/viande.jpg',
        featured: false
    },
    {
        id: 6,
        title: 'Utiliser le covoiturage',
        category: 'transport',
        impact: 30,
        description: 'Partager vos trajets en voiture permet de réduire vos émissions et vos coûts.',
        imageUrl: 'assets/images/covoiturage.jpg',
        featured: false
    }
];