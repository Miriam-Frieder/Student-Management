import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';


type Blessing = 'Good Morning!' | 'Good Afternoon!' | 'Good Evening!' | 'Good Night!';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {




}
