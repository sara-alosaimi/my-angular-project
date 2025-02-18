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
  selector: 'app-chart',
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
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {

}
