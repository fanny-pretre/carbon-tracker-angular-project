// Typage de la donnée

export interface Article {
    id: number;             // identifiant unique
    title: string;          // titre de l'article
    category: string;       // catégorie : general / transport / food
    impact: number;         // kg CO₂ économisés
    description: string;    // description détaillée du conseil
    imageUrl?: string;      // URL d'une image (optionnel)
    featured?: boolean;     // vrai si c'est un article mis en avant
}