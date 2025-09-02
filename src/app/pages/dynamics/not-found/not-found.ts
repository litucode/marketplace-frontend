import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})

export class NotFound {

  items() {
    return [
      { id: 1, title: 'Go Home', description: 'Return to the homepage for more options.' },
      { id: 2, title: 'Contact Support', description: 'Reach out to our support team for help.' },
      { id: 3, title: 'Browse Categories', description: 'Explore other sections of the marketplace.' }
    ];
  }

}
