import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AccueilService } from './accueil.service';
import { DashboardData } from './model/dashboard.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.scss']
})
export class Accueil {

  dashboard$: Observable<DashboardData>;

  constructor(private homeService: AccueilService) {
    this.dashboard$ = this.homeService.getDashboardData(); // récupère les données depuis le JSON
  }
}