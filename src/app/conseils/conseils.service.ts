import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { ARTICLES } from './data/articles.mock';

@Injectable({ providedIn: 'root' })
export class ConseilsService {

    getArticles(): Promise<Article[]> {
        return Promise.resolve(ARTICLES); // données immédiates
    }
}