import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPopUp = false; // Controls popup visibility

  // Listens to the scroll event on the window
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight || document.body.scrollHeight;

    // Show popup when scrolled to the bottom
    if (scrollPosition >= maxScroll) {
      this.showPopUp = true;
    }
  }

  // Close the popup
  closePopUp(): void {
    this.showPopUp = false;
  }
}
