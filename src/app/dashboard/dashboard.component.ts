import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderloginComponent } from '../headerlogin/headerlogin.component';
import { ContentComponent } from '../content/content.component';
import { FeaturesComponent } from '../features/features.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ChartComponent } from '../chart/chart.component';
import { Chart2Component } from '../chart2/chart2.component';
import { Chart3Component } from '../chart3/chart3.component';
import { TableComponent } from '../table/table.component';
import { FooterloginComponent } from '../footerlogin/footerlogin.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderloginComponent,
    ContentComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    ChartComponent,
    Chart2Component,
    Chart3Component,
    TableComponent,
    FooterloginComponent,
    CommonModule
  ],  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
