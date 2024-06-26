import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { DateFormatDirective } from '../directives/date-format.directive';
import { RgFormatDirective } from '../directives/rg-format.directive';
import { CpfFormatDirective } from '../directives/cpf-format.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    FormsComponent,
    DateFormatDirective,
    RgFormatDirective,
    CpfFormatDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatProgressSpinnerModule
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsPDFModule { }
