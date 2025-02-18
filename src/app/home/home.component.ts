import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderloginComponent } from '../headerlogin/headerlogin.component';
import { ContentComponent } from '../content/content.component';
import { FeaturesComponent } from '../features/features.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterloginComponent } from '../footerlogin/footerlogin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderloginComponent,
    ContentComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    FooterloginComponent,
    CommonModule
  ],  
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
  title = 'Home Component';
}
