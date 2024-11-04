import { Component } from '@angular/core';

type Blessing ='Good Morning!'|'Good Afternoon!'|'Good Evening!'|'Good Night!';

@Component({
  selector: 'app-blessing',
  standalone: true,
  imports: [],
  templateUrl: './blessing.component.html',
  styleUrl: './blessing.component.css'
})
export class BlessingComponent {
  calculateBlessPerTime=():Blessing=>{
    const time=new Date();
    const hour=time.getHours();
    if(hour>=6&&hour<13)
      return 'Good Morning!';
    else if(hour>=13&&hour<18)
      return 'Good Afternoon!';
    else if(hour>=18&&hour<23)
      return 'Good Evening!';
    else
      return 'Good Night!';
  };
}
