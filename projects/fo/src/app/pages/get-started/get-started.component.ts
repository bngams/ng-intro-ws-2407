import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {

  constructor(private router: Router) { }

  title = 'fo'; // title: string => implicit typing with assignation
  today = new Date(); // today: Date => implicit typing with assignation
  words = ['Hello', 'World', '!!!'];
  btnDisabled = false;

  doSomething(word?: string) {
    alert(`Word is : ${word}`);
    this.router.navigateByUrl('/home');
  }

}
