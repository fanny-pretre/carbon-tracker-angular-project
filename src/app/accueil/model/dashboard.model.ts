export interface DashboardSummary {
    transport: number;
    alimentation: number;
    energie: number;
}

export interface DashboardData {
    score: number;           // kg CO₂ économisés
    actions: string[];       // liste des actions du jour
    summary: DashboardSummary; // résumé par catégorie
}