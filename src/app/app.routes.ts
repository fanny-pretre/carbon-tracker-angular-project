import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { CarbonFootprint } from './carbon-footprint/carbon-footprint.component';
import { Conseils } from './conseils/conseils';
import { Contact } from './contact/contact';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales';

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'carbonfootprint', component: CarbonFootprint },
    { path: 'conseils', component: Conseils, runGuardsAndResolvers: 'always' },
    { path: 'contact', component: Contact },
    { path: 'mentionslegales', component: MentionsLegalesComponent },
];