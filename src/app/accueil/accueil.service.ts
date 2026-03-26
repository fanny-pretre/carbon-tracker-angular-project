import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DASHBOARD_DATA } from './data/dashboard-data';
import { DashboardData } from './model/dashboard.model';

@Injectable({ providedIn: 'root' })
export class AccueilService {

    getDashboardData(): Observable<DashboardData> {
        return of(DASHBOARD_DATA); // renvoie un Observable du JSON
    }
}