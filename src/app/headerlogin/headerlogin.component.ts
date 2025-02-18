import { Component } from '@angular/core';

@Component({
  selector: 'app-headerlogin',
  standalone: true,
  imports: [],
  templateUrl: './headerlogin.component.html',
  styleUrl: './headerlogin.component.scss'
})
export class HeaderloginComponent {

  showPopup() {
    const popup = document.getElementById("logoutPopup");
    if (popup) {
      popup.style.display = "block";
    }
  }

  closePopup() {
    const popup = document.getElementById("logoutPopup");
    if (popup) {
      popup.style.display = "none";
    }
  }

  logout() {
    window.location.href = "#"; 
  }

}
