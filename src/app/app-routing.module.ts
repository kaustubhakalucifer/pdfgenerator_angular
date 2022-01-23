import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertorComponent } from './convertor/convertor.component';

const routes: Routes = [
  { "path": 'converter', component: ConvertorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
