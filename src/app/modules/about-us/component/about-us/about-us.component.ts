import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FontAwesomeModule, MatSlideToggleModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  faCoffee = faCoffee;
}
