import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { HomeComponent } from "./home/home.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [MoviesComponent, HomeComponent],
  imports: [MoviesRoutingModule, NgbModule.forRoot()],
  exports: [MoviesComponent]
})
export class MoviesModule {}
