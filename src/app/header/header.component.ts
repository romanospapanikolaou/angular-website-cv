import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if ((event.target as HTMLElement).tagName === 'A') {
      event.preventDefault();
      const targetId = (event.target as HTMLElement)
        .getAttribute('href')!
        .substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }
}
