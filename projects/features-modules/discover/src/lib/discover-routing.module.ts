import { HomeComponent } from "./home/home.component";
import { DiscoverComponent } from "./discover.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "discover",
    component: DiscoverComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule {}
