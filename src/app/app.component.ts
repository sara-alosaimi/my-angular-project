import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeaderloginComponent } from './headerlogin/headerlogin.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FooterloginComponent } from './footerlogin/footerlogin.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router'; 
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet, 
    ReactiveFormsModule,
    HeaderComponent,
    HeaderloginComponent,
    ContentComponent,
    DashboardComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    FooterloginComponent,
    ChartComponent,
    Chart2Component,
    Chart3Component,
    TableComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-project';
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('My Angular Project');
    this.metaService.addTag({ name: 'description', content: 'This is a description of my Angular project' });

    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
