import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly email = 'nissikouassi83@gmail.com';
  readonly phone = '0140118452';
  readonly location = "Côte d’Ivoire";
}
