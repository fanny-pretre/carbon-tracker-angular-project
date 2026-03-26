import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConseilsService } from './conseils.service';
import { Article } from './models/article.model';

@Component({
  selector: 'app-conseils',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conseils.html',
  styleUrls: ['./conseils.scss']
})
export class Conseils implements OnInit {

  articles: Article[] = [];
  searchTerm: string = ''; // facultatif : pour filtrer via un input
  loading = false;
  error: string | null = null;

  constructor(
    private conseilsService: ConseilsService,
    private cd: ChangeDetectorRef // pour forcer la détection des changements
  ) { }

  ngOnInit() {
    this.loadArticles();
  }

  async loadArticles() {
    this.loading = true;
    this.error = null;
    try {
      this.articles = await this.conseilsService.getArticles();
      this.cd.detectChanges(); // garantit que la vue se met à jour immédiatement
    } catch {
      this.error = 'Erreur de chargement des articles';
      this.articles = [];
    } finally {
      this.loading = false;
    }
  }

  // Retourne les articles filtrés selon searchTerm
  filteredArticles(): Article[] {
    if (!this.searchTerm) return this.articles;
    return this.articles.filter(a =>
      a.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}