import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { CarbonFootprint } from './carbon-footprint/carbon-footprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, CarbonFootprint],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('calcul-empreinte-carbone');
}
