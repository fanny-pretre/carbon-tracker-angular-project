import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: 12 },
    { distanceKm: 150, consommationPour100Km: 6, quantiteCO2: 35 },
    { distanceKm: 250, consommationPour100Km: 7, quantiteCO2: 60 },
    { distanceKm: 350, consommationPour100Km: 8, quantiteCO2: 85 },
    { distanceKm: 450, consommationPour100Km: 9, quantiteCO2: 110 }
  ];

  constructor() { }

  calculCO2(v: any): number {
    return (v.distanceKm * v.consommationPour100Km) / 100 * 2.3;
  }

  getVoyages() {
    return this.voyages.map(v => ({
      ...v,
      quantiteCO2: this.calculCO2(v)
    }));
  }

  getResumeVoyages() {
    const distanceKm = this.voyages.reduce((total, v) => total + v.distanceKm, 0);

    const consommationPour100Km = this.voyages.reduce((sum, v) => sum + v.consommationPour100Km, 0) / this.voyages.length;

    const quantiteCO2Totale = this.voyages.reduce((total, v) => total + v.quantiteCO2, 0)

    return {
      distanceKm,
      consommationPour100Km,
      quantiteCO2Totale
    }
  }

  addVoyage(voyage: { distanceKm: number; consommationPour100Km: number; quantiteCO2: number }) {
    this.voyages.push(voyage);
  }

}
