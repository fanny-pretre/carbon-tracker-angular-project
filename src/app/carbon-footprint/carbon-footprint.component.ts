import { Component, OnInit } from "@angular/core";
import { CarbonFootprintResult } from "./carbon-footprint-result/carbon-footprint-result/carbon-footprint-result";
import { CarbonFootprintForm } from "./carbon-footprint-form/carbon-footprint-result/carbon-footprint-form";
import { CommonModule } from "@angular/common";
import { CarbonFootprintCompute } from "../service/carbon-footprint-compute";

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  imports: [CarbonFootprintResult, CarbonFootprintForm, CommonModule],
  standalone: true,
  styleUrls: ['./carbon-footprint.component.scss']
})
export class CarbonFootprint implements OnInit {

  // Initialisation des valeurs à 0
  distanceKm: number = 0;
  consommationPour100Km: number = 0;
  quantiteCO2Totale: number = 0;

  constructor(public carbonService: CarbonFootprintCompute) { }

  ngOnInit(): void {
    this.loadResume();
  }

  loadResume(): void {
    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }

  get voyages() {
    return this.carbonService.getVoyages();
  }

  genererVoyage(): void {
    const distance = Math.floor(Math.random() * 500) + 50;
    const consommation = Math.floor(Math.random() * 6) + 4;
    const quantiteCO2 = (distance * consommation * 2.31) / 100;

    this.carbonService.addVoyage({
      distanceKm: distance,
      consommationPour100Km: consommation,
      quantiteCO2: quantiteCO2
    });

    this.loadResume();
  }
}