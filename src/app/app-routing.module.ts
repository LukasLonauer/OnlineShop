import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { products } from './products';
import { FloofComponent } from './floof/floof.component';



const routes: Routes = [{
  path: "", component: MainComponent
}, {
  path: "about", component: AboutComponent
},{
  path: "floof", component: FloofComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
