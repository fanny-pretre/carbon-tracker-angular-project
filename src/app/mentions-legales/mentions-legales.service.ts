import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MentionsLegales } from './models/mentions-legales.model';


@Injectable({ providedIn: 'root' })
export class MentionsLegalesService {
    // Données fictives pour la page "Mentions légales"
    // Ce site est un projet de pratique pour apprendre les concepts de base d'Angular
    private mentions: MentionsLegales = {
        title: 'Mentions légales - RxJS',
        content: [
            'Ce site est un projet fictif destiné à pratiquer les concepts de base d’Angular.',
            'Toutes les informations sont inventées.',
            'Il ne s’agit pas d’un vrai site ou d’une vraie entreprise.',
            'L’objectif est uniquement pédagogique et expérimental.'
        ],
    };

    getMentions(): Observable<MentionsLegales> {
        return of(this.mentions);
    }
}