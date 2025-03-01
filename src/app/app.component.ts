import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from "./modules/layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibagirlsDev-Enterprise';
}
