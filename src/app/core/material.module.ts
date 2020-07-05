import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

const material = [
  ScrollingModule,
  MatTableModule,
  MatChipsModule,
  MatIconModule,
];

@NgModule({
  imports: [...material],
  exports: [...material],
})
export class MaterialModule {}
