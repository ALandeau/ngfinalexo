import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ContactComponent} from "./contact/contact.component";
// import {ItemComponent} from "./item/item.component";

const APP_ROUTES : Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  // {path:'mentions', component:PageMentionsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
