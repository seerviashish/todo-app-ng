import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

const MaterialComponents = [
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSidenavModule,
  MatTabsModule,
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents],
})
export class MaterialModule {}
