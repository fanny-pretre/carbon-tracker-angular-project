import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { CarbonFootprint } from './carbon-footprint/carbon-footprint.component';
import { Conseils } from './conseils/conseils';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'carbonfootprint', component: CarbonFootprint },
    { path: 'conseils', component: Conseils },
    { path: 'contact', component: Contact },
];