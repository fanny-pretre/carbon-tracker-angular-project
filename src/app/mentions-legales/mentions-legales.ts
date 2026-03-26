import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsLegalesService } from './mentions-legales.service';
import { Observable } from 'rxjs';
import { MentionsLegales } from './models/mentions-legales.model';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentions-legales.html',
  styleUrls: ['./mentions-legales.scss']
})
export class MentionsLegalesComponent implements OnInit {
  mentions$!: Observable<MentionsLegales>; // Observable pour template

  constructor(private mentionsService: MentionsLegalesService) { }

  ngOnInit(): void {
    this.mentions$ = this.mentionsService.getMentions();
  }
}