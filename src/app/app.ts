import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('calcul-empreinte-carbone');
}
