import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RegistrateComponent } from './registrate.component';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild([
        {
          path: '',
          component: RegistrateComponent
        }
      ])
    ],
    declarations: [RegistrateComponent]
  })
  export class RegistrateComponentModule {}
  