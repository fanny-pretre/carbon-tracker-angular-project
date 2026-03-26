// Donnée en mode bouchon - mock qui simule ce que l'on aurait dans la BDD

import { DashboardData } from "../model/dashboard.model";

export const DASHBOARD_DATA: DashboardData = {
    score: 120,  // kg CO₂ économisés
    actions: [
        "Prendre le vélo pour les petits trajets",
        "Limiter la viande au dîner",
        "Éteindre les appareils en veille"
    ],
    summary: {
        transport: 50,
        alimentation: 30,
        energie: 40
    }
};
