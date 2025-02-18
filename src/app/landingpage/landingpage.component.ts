import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderloginComponent } from '../headerlogin/headerlogin.component';
import { ContentComponent } from '../content/content.component';
import { FeaturesComponent } from '../features/features.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderloginComponent,
    ContentComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    CommonModule
  ],  
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
