import { NgModule } from "@angular/core";

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

const MaterialModulesCollection = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
]

@NgModule({
  imports: [MaterialModulesCollection],
  exports: [MaterialModulesCollection]
})
export class MaterialModule {}
