import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-ishop-api',
  templateUrl: './ishop-api.component.html',
  styleUrls: ['./ishop-api.component.scss']
})
export class IshopAPIComponent {
  rspinactive: boolean = true;
  pspinactive: boolean = true;

}
